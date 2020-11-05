import { AppState, Race } from "../models/races.models"
import { createReducer, on } from '@ngrx/store';
import { RacesLoadStart, RacesLoadSuccess, RacesLoaded } from '../actions/races.actions';

// const initialState: AppState = {
//     races: [],
//     racesLoaded: false,
//     s: "Unloaded"
// }

const initialState: Race[] = [];

const _raceReducer = createReducer(
    initialState,
    on(RacesLoadSuccess,
        (state, action) => {
            console.log("action", action.payload);
            return action.payload;
        }),
    on(RacesLoaded, (state, action) => state)
);

export function raceReducer(state, action) {
    return _raceReducer(state, action);
}