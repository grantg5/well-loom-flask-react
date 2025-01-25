export interface PracticeGroup {
    id: number; // Primary key
    practiceGroupName: string; // Text (Unique)
    practiceGroupDescription: string; // Text
    practiceGroupImage: string; // Text
    isActive: boolean; // Boolean
    createdBy: number; // user(id)
    createstringTime: string; // stringtime
    upstringdBy: number; // user(id)
    upstringstringTime: string; // stringtime
}
