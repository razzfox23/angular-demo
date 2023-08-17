import { createAction, props } from "@ngrx/store";
import { DoggieModel } from "src/app/core/models/doggie.model";


export const LoadDoggies = createAction(
    '[Doggies Page] Load Doggies'
);


export const LoadSuccessDoggies = createAction(
    '[Doggies Page] Load Successfully Doggies',
    props<{doggies: DoggieModel[]}>()
);

export const LoadErrorDoggies = createAction(
    '[Doggies Page] Load Error Doggies',
    props<{doggies: DoggieModel[]}>()
);
