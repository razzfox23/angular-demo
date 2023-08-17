import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { DoggieState } from "src/app/core/models/doggie.state";


export const selectDoggies = (state: AppState) => state.doggies;

export const selectDoggieList = createSelector(
    selectDoggies,
    (state: DoggieState) => state.doggies
);


export const selectDoggieLoading = createSelector(
    selectDoggies,
    (state: DoggieState) => state.loading
);