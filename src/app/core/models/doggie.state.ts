import { DoggieModel } from "./doggie.model";

export interface DoggieState{
    loading: boolean,
    doggies: ReadonlyArray<DoggieModel>
}