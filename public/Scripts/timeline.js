var reactTimeline = function (container, data, machineStates, initStart, initEnd) {
    this.firstLoad = true;
    this.container = container;
    this.container.id = "timelinesDIV";
    this.machineStates = machineStates;
    this.initStart = initStart;
    this.initEnd = initEnd;
    this.drawTimeline1(data);
    this.drawTimeline2(machineStates);
};
reactTimeline.prototype.drawTimeline1 = function (data) {
    var options = {
        'width': '100%',
        'height': "200px",
        'editable': true,
        'style': 'box',
        'cluster': false,
        'animate': false,
        'animateZoom': false,
        'stackEvents': false,
        'showCustomTime': false,
        'showCurrentTime': true,
        'showArrowTime': true // not in chap-links documentation. has setArrowTime method,works like customTime
    };

    var range;
    var self = this;
    var onAdd = function (e) {
        console.log(e)
        self.triggers("onAddItem", newItemStart)
    }
    data = addDate(data);
    this.data = data;

    var timelineCon = document.createElement('div');
    timelineCon.id = "timeline1";
    self.container.appendChild(timelineCon);
    self.timeline = new links.Timeline(document.getElementById('timeline1'), options);
    links.events.addListener(self.timeline, 'select', onSelect);
    links.events.addListener(self.timeline, 'add', onAdd);
    self.timeline.draw(data);
    if (self.timeline !== "undefined" && self.timeline !== undefined) {
        range = self.timeline.getVisibleChartRange();
    }
    if (range !== "undefined" && range !== undefined) {
        self.timeline.setVisibleChartRange(range.start, range.end);
    }

    if (this.firstLoad) this.timeline.setVisibleChartRange(this.initStart, this.initEnd);


    links.events.addListener(this.timeline, 'rangechange', onRangeChange);
    onRangeChange()


    function addDate(data) {//timeline library requires times to be as js date objects
        for (var i = 0; i < data.length; i++) {
            data[i].start = new Date(data[i].start);
        }
        return data;
    }
    function onSelect() {
        var sel = self.timeline.getSelection();
        var selectedData;
        if (sel[0] !== undefined) {
            if (typeof (sel[0].row) != "undefined") {
                selectedData = [];
                selectedData.push(self.timeline.getItem(sel[0].row));
            }
            else {
                selectedData = self.timeline.getCluster(sel[0].cluster);
                selectedData = selectedData.items
            }
            self.triggers("onSelect", selectedData);
        }
        else {

        }
    }
    function onRangeChange() {
        if (self.timeline !== undefined && self.timeline2 !== undefined) {
            var range = self.timeline.getVisibleChartRange();
            self.timeline2.setVisibleChartRange(range.start, range.end);
            self.start = range.start;
            self.end = range.end;
            var hours = Math.abs(range.end - range.start) / 36e5;

            if (hours > 64) {
                document.getElementById("timeline2").style.display = "none";
            }
            else {
                if (document.getElementById("timeline2").style.display !== "block") {
                    document.getElementById("timeline2").style.display = "block";
                }
            }
        }
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //if timeline is placed in scrollable div below code ensures the mouewheel scrolls the timeline and not the scrollable div
    $('#timeline1').on('DOMMouseScroll mousewheel', function (ev) {
        var $this = $(this),
            scrollTop = this.scrollTop,
            scrollHeight = this.scrollHeight,
            height = $this.height(),
            delta = (ev.type == 'DOMMouseScroll' ?
                ev.originalEvent.detail * -40 :
                ev.originalEvent.wheelDelta),
            up = delta > 0;

        var prevent = function () {
            ev.stopPropagation();
            ev.preventDefault();
            ev.returnValue = false;
            return false;
        }

        if (!up && -delta > scrollHeight - height - scrollTop) {
            // Scrolling down, but this will take us past the bottom.
            $this.scrollTop(scrollHeight);
            return prevent();
        } else if (up && delta > scrollTop) {
            // Scrolling up, but this will take us past the top.
            $this.scrollTop(0);
            return prevent();
        }
    });
    /////////////////////////////////////////////////////////////////////////////////////////////
    var params = self.timeline.eventParams,
        me = self.timeline;
    if (!params.onDblClick2) {
        params.onDblClick2 = function (event) { me.onDblClick(event); console.log("click") };
        document.getElementById('axisFrame').addEventListener("click", params.onDblClick2);

    }
};

reactTimeline.prototype.drawTimeline2 = function (data) {
    var self = this;
    var range = self.timeline.getVisibleChartRange();
    var options2 = {
        'stackEvents': false,
        'showCustomTime': false, // show a blue, draggable bar displaying a custom time
        'showMajorLabels': false,// all axis lines and bales need to be hidden from this timeline as we already have them from timeline 1
        'showMinorLabels': false,// css also has to be changed
        'width': "100%",
        'animate': false,
        'animateZoom': false,
        'eventMarginAxis': 0
    };                    // this gives the affect of timeline 2 height also gettig higher. what really happens is its position is moved further down and more of it is shown
    var timelineCon = document.createElement('div');
    timelineCon.id = "timeline2";
    this.container.appendChild(timelineCon);
    this.timeline2 = new links.Timeline(document.getElementById('timeline2'), options2);
    this.timeline2.draw(data);
    self.timeline2.setVisibleChartRange(range.start, range.end);
}

reactTimeline.prototype.listeners = {};
reactTimeline.prototype.addListener = function (event, callback) {
    var listener = this.listeners[event];
    if (!listener) {
        listener = {
            'events': {}
        };
        this.listeners[event] = listener;
    }

    var callbacks = listener.events[event];
    if (!callbacks) {
        callbacks = [];
        listener.events[event] = callbacks;
    }
    // add the callback if it does not yet exist
    if (callbacks.indexOf(callback) == -1) {
        callbacks.push(callback);
    }
}
reactTimeline.prototype.triggers = function (event, properties) {
    var listener = this.listeners[event];
    if (listener) {
        var callbacks = listener.events[event];
        if (callbacks) {
            for (var i = 0, iMax = callbacks.length; i < iMax; i++) {
                callbacks[i](properties);
            }
        }
    }
}

reactTimeline.prototype.update = function (data) {
    if (data.length !== this.data.length) {
        this.drawTimeline1(data);
    }
}












