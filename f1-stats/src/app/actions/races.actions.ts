// import { Injectable } from "@angular/core";
// import { Action } from "@ngrx/store";
import { Race } from "../models/races.models";

/*
export const LOAD_RACES = "LOAD_RACES";
export const RACES_LOADED = "RACES_LOADED"

export class LoadRaces implements Action {
    readonly type = LOAD_RACES
    constructor(public payload: Race[]) { }
}

export class RacesLoaded implements Action {
    readonly type = "RACES_LOADED"
    constructor(public payload: boolean) { }
}

export type Actions = LoadRaces | RacesLoaded;
*/


import { createAction, props } from '@ngrx/store';

export const RacesLoadStart = createAction('[RACES] Load Races');
export const RacesLoadSuccess = createAction('[RACES] Load Success', props<{ payload: Race[] }>());
export const RacesLoaded = createAction('[RACES] Loaded');

