import * as types from '../components/timeline/actions/types';
import {machineStates, fetchLatestStatus, fetchingMachineStates} from '../components/timeline/reducers';

describe('reducers', () => {
    var mockArr = [{
        "date": "24-9",
        "content": "<div style='height:46px'></div>",
        "type": "range",
        "milli": 1540328400000,
        "milliEnd": 1540332560553,
        "className": "Working"
      },
      {
        "date": "24-9",
        "content": "<div style='height:46px'></div>",
        "type": "range",
        "milli": 1540332560553,
        "milliEnd": 1540332902573,
        "className": "Idle"
      }];
    it('should handle machineStates', () => {
      expect(
        machineStates([], {
            type: types.SET_MACHINE_STATES,
            payload: mockArr
        })
      ).toEqual(mockArr);
    })
  
    it('should handle fetchingMachineStates', () => {
      expect(
        fetchingMachineStates(false, {
          type: types.IS_FETCHING_MACHINE_STATES,
          payload: true
        })
      ).toEqual(true);
    })
    it('should handle fetchLatestStatus', () => {
        expect(
          fetchLatestStatus('', {
            type: types.SET_MACHINE_STATES,
            payload: mockArr
          })
        ).toEqual("Idle");
      })
  })