import { createReducer, on } from "@ngrx/store";
import { globalActions } from "./global.actions";
import { Patient } from "../core/interfaces/patient.interface";

export interface GlobalStateInterface {
  patients: Patient[];

  waitingTimeList: {
    registeredTime: Date;
    timestamp: number;
  }[];
}

const initialState: GlobalStateInterface = {
  patients: [],
  waitingTimeList: [],
};

export const globalReducers = createReducer(
  initialState,
  on(globalActions.addPatient, (state, { patient }) => {
    return {
      ...state,
      patients: [...state.patients, patient],
    };
  }),

  on(globalActions.removePatient, (state, { patient }) => {
    const patients = state.patients.filter(
      (pat) => pat.registerdTime !== patient.registerdTime
    );

    const waitingTimeList = state.waitingTimeList.filter(
      (pat) => pat.registeredTime !== patient.registerdTime
    );

    return {
      ...state,
      patients,
      waitingTimeList,
    };
  }),

  on(globalActions.addWaitingTime, (state, { timestamp, registeredTime }) => {
    const patient = state.patients.find(
      (pat) => registeredTime === pat.registerdTime
    );

    const isPopulatedAndPatientExist =
      !!patient && !!state.waitingTimeList.length;

    const waitingTimeList = isPopulatedAndPatientExist
      ? state.waitingTimeList.map((el) =>
          el.registeredTime === registeredTime ? { ...el, timestamp } : el
        )
      : [...state.waitingTimeList, { timestamp, registeredTime }];

    return {
      ...state,
      waitingTimeList,
    };
  })
);
