import {
  SET_MACHINE_STATES,
  IS_FETCHING_MACHINE_STATES
} from '../actions/types';
import { databaseRef } from "../config/firebase";

export const fetchMachineStates = (nest) => {
  return (dispatch) => {
    dispatch({ type: IS_FETCHING_MACHINE_STATES, payload: true });

    databaseRef.child(nest).on('value', snapshot => {
      var data = snapshot.toJSON();
      var recent = [];
      for (var key in data) {
        recent.push(data[key]);
      }
      dispatch({ type: SET_MACHINE_STATES, payload: recent });
      dispatch({ type: IS_FETCHING_MACHINE_STATES, payload: false })
    });

  }
}



