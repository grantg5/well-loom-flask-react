import { IEntity } from "./i-entity";

export interface Theory extends IEntity {
    theoryName: string;
    theoryFounder: string;
    theoryDescription: string;
}