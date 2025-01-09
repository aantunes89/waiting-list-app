import { createAction, props } from "@ngrx/store";
import { Patient } from "../core/interfaces/patient.interface";

const addPatient = createAction(
  "[GLOBAL STATE] ADD PATIENT",
  props<{ patient: Patient }>()
);

const removePatient = createAction(
  "[GLOBAL STATE] REMOVE PATIENT",
  props<{ patient: Patient }>()
);

const addWaitingTime = createAction(
  "[GLOBAL STATE] ADD WAITING TIME",
  props<{ registeredTime: Date; timestamp: number }>()
);

export const globalActions = {
  addPatient,
  removePatient,
  addWaitingTime,
};
