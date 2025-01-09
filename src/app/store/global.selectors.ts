import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GlobalStateInterface } from "./global.reducer";
import { Priority } from "../core/types/Priority";

const featureSelector = createFeatureSelector<GlobalStateInterface>("global");

export const getPatients$ = createSelector(
  featureSelector,
  (state) => state.patients
);

export const getPatientsByPriority$ = (priority: Priority) =>
  createSelector(
    featureSelector,
    (state) =>
      state.patients.filter((element) => element.priority === priority)
        .length ?? 0
  );

export const getBiggerTimeStamp$ = createSelector(featureSelector, (state) => {
  const timestamps = state.waitingTimeList?.map(({ timestamp }) => timestamp);
  return new Date(Math.min(...timestamps));
});
