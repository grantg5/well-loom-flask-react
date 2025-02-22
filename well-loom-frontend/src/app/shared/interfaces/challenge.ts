import { IEntity } from "./i-entity";

export interface Challenge extends IEntity {
  challengeName: string;
  challengeDescription: string;
}