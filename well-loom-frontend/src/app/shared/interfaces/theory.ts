export interface Theory {
    id: number; // Primary key
    theoryName: string; // Text (Unique)
    theoryFounder: string; // Text
    theoryDescription: string; // Text
    isActive: boolean; // Boolean
    createdBy: number; // user(id)
    createDateTime: string; // Datetime
    updatedBy: number; // user(id)
    updateDateTime: string; // Datetime
}