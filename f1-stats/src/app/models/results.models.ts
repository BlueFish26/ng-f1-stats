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

export interface Driver {
    driverId: string,
    permanentNumber: string,
    code: string,
    url: string,
    givenName: string,
    familyName: string,
    dateOfBirth: string,
    nationality: string,
}