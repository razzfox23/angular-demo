import { createReducer, on } from "@ngrx/store";
import { LoadDoggies, LoadErrorDoggies, LoadSuccessDoggies } from "../actions/doggies.actions";
import { DoggieState } from "src/app/core/models/doggie.state";

export const initialState: DoggieState = {
    loading: false,
    doggies: []
};


export const doggiesReducer = createReducer(
    initialState,
    on(LoadDoggies, (state) => { return {... state, loading: true }}),
    on(LoadSuccessDoggies, (state, { doggies }) => { return {... state, loading: false, doggies }}),
    on(LoadErrorDoggies, (state, { doggies }) => { return {... state, loading: false, doggies }})
);