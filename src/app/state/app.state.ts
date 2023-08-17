import { ActionReducerMap } from "@ngrx/store";
import { DoggieState } from "../core/models/doggie.state";
import { doggiesReducer } from "./reducers/doggies.reducers";

export interface AppState{
    doggies: DoggieState
    //kittens: KittensState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    doggies: doggiesReducer
    //kittens: KittensReducers

}