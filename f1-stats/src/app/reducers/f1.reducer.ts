import { AppState, Race } from "../models/races.models";
import { Constructor } from "../models/constructors.models";
import { createReducer, INITIAL_REDUCERS, on } from '@ngrx/store';
import { RacesLoadStart, RacesLoadSuccess, RacesLoaded, RacesLoadQualifyingSuccess } from '../actions/races.actions';
import { ConstructorsLoadStart, ConstructorsLoadSuccess, ConstructorsLoaded } from '../actions/constructors.actions';
import { QualifyingResult } from '../models/results.models';

// const initialState: AppState = {
//     races: [],
//     racesLoaded: false,
//     s: "Unloaded"
// }

const racesInitialState: Race[] = [];

const _raceReducer = createReducer(
    racesInitialState,
    on(RacesLoadSuccess,
        (state, action) => {
            return action.payload;
        }),
    on(RacesLoaded, (state, action) => state),
    on(RacesLoadQualifyingSuccess, (state, action) => {
        return state.reduce(
            (previousValue, currentValue, currentIndex, array) => {
                if (currentValue.round == action.round) {
                    currentValue = { ...currentValue, QualifyingResult: action.payload } //use spread operator to avoid dynamic property generation errors
                };
                previousValue.push(currentValue);
                return previousValue;
            }, []);
    }
    )
);

export function raceReducer(state, action) {
    return _raceReducer(state, action);
}


const constructorsInitialState: Constructor[] = [];

const _constructorsReducer = createReducer(
    constructorsInitialState,
    on(ConstructorsLoadSuccess,
        (state, action) => {
            return action.payload;
        }),
    on(ConstructorsLoaded, (state, action) => state)
);

export function constructorReducer(state, action) {
    return _constructorsReducer(state, action);
}