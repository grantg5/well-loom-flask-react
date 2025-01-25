export interface Challenge {
    id: number; // Primary key
    challengeName: string; // Text (Unique)
    challengeDescription: string; // Text
    isActive: boolean; // Boolean
    createdBy: number; // user(id)
    createDateTime: string; // Datetime
    updatedBy: number; // user(id)
    updateDateTime: string; // Datetime
  }
  