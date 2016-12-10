export type Category = "Teams" | "Personality" | "Diversity" | "Supportive Communication" | "Conflict Management" | "Crucial Conversations" | "Stress Management" | "Creativity" | "Power and Influence" | "Motivation" | "Empowerment" | "Calling";
export type Test = "Midterm" | "Final";

export interface FlashCardContent {
    term: String;
    definition: String;
    category: Category;
    test: Test;
}