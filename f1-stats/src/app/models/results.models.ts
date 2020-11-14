import { Constructor } from './constructors.models';
import { Circuit } from './races.models';

export interface QualifyingResult {
    season: string,
    round: string,
    url: string,
    raceName: string,
    Circuit: Circuit,
    number: string,
    position: string,
    Driver: Driver,
    Constructor: Constructor,
    Q1: string,
    Q2: string,
    Q3: string

}

export interface RaceResult {
    number: string,
    position: string,
    points: string,
    Driver: Driver,
    Constructor: Constructor,
    grid: string,
    laps: string,
    Time: Time,
    FastestLap: FastestLap
}

export interface Driver {
    driverId: string,
    permanentNumber: string,
    code: string,
    url: string,
    givenName: string,
    familyName: string,
    dateOfBirth: string,
    nationality: string,
    helmet_img: string
}

export interface Time {
    millis: string,
    time: string
}

export interface FastestLap {
    rank: string,
    lap: string,
    Time: Time,
    AverageSpeed: AverageSpeed
}

export interface AverageSpeed {
    units: string,
    speed: string
}
