import { QualifyingResult } from './results.models';

export interface Race {
    date: string,
    raceName: string,
    round: string,
    season: string,
    time: string,
    track_img: string,
    url: string
    Circuit: Circuit,
    QualifyingResult: QualifyingResult[]
}

export interface Circuit {
    Location: Location,
    circuitId: string,
    circuiteName: string,
    url: string,
}

export interface Location {
    country: string,
    lat: string,
    long: string,
    locality: string
}

export interface AppState {
    races: Race[];
    racesLoaded: boolean,
    s: string
}
