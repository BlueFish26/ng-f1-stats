import { Race } from "../models/races.models";
import { createAction, props } from '@ngrx/store';
import { QualifyingResult } from '../models/results.models';

export const RacesLoadStart = createAction('[RACES] Load Races');
export const RacesLoadSuccess = createAction('[RACES] Load Success', props<{ payload: Race[] }>());
export const RacesLoaded = createAction('[RACES] Loaded');

export const RacesLoadQualifyingStart = createAction("[RACE-QUALIFIYNG] Load Qualifying Start", props<{ round: string }>());
export const RacesLoadQualifyingSuccess = createAction("[RACE-QUALIFIYNG] Load Qualifying Success", props<{ round: string, payload: QualifyingResult[] }>());
