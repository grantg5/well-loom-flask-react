export interface Practice {
    id: number; // Primary key
    practiceName: string; // Text (Unique)
    practiceShortDescription: string; // Text
    practiceLongDescription: string; // Text
    practiceImage: string; // Text
    isActive: boolean; // Boolean
    createdBy: number; // user(id)
    createDateTime: string; // Datetime
    updatedBy: number; // user(id)
    updateDateTime: string; // Datetime
  }