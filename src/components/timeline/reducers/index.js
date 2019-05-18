import { combineReducers } from 'redux';
import {
  SET_MACHINE_STATES,
  IS_FETCHING_MACHINE_STATES,
} from '../actions/types';


export const machineStates = function (state = [], action) {
  switch (action.type) {
    case SET_MACHINE_STATES:
      const machineStates = addDate(action.payload);

      return [...machineStates];
    default:
      return state;
  }
}
export const fetchingMachineStates = function (state = false, action) {
  switch (action.type) {
    case IS_FETCHING_MACHINE_STATES:
      if (action.payload) return true
      return false;
    default:
      return state;
  }
}
export const fetchLatestStatus = function (state='', action) {
  switch (action.type) {
    case SET_MACHINE_STATES:
      const status = getLatestStatus(action.payload);
      return status;
    default:
      return state;
  }
}

export default combineReducers({
  machineStates: machineStates,
  fetchingMachineStates: fetchingMachineStates,
  fetchLatestStatus: fetchLatestStatus
});

function addDate(data) {//timeline library requires times to be as js date objects
  for (var i = 0; i < data.length; i++) {
    data[i].start = new Date(data[i].milli);
    data[i].end = new Date(data[i].milliEnd);
  }
  return data;
}

function getLatestStatus(data) {
  return data[data.length-1].className;
}
