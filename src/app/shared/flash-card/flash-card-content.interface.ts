export interface FlashCardContent {
    term: String;
    definition: String;
    category: "Teams" | "Personality" | "Diversity" | "Supportive Communication" | "Conflict Management" | "Crucial Conversations" | "Stress Management" | "Creativity" | "Power and Influence" | "Motivation" | "Empowerment" | "Calling";
    test: "Midterm" | "Final";
}