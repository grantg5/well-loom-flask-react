import { IEntity } from "./i-entity";

export interface Practice extends IEntity {
  practiceName: string;
  practiceShortDescription: string;
  practiceLongDescription: string;
  practiceImage: string;
}