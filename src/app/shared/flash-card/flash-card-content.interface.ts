export const enum Category {
    Teams,
    Personality,
    Diversity,
    SupportiveCommunication,
    ConflictManagement,
    CrucialConversations
}

export interface FlashCardContent {
    term: String;
    definition: String;
    category: Category
}