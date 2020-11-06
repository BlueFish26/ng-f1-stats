import { Constructor } from "../models/constructors.models";
import { createAction, props } from '@ngrx/store';

export const ConstructorsLoadStart = createAction('[CONSTRUCTORS] Load Constructors');
export const ConstructorsLoadSuccess = createAction('[CONSTRUCTORS] Load Success', props<{ payload: Constructor[] }>());
export const ConstructorsLoaded = createAction('[CONSTRUCTORS] Loaded');

