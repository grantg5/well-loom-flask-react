import { IEntity } from "./i-entity";

export interface PracticeGroup extends IEntity {
    practiceGroupName: string;
    practiceGroupDescription: string;
    practiceGroupImage: string;
}
