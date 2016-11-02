export interface MultipleChoiceQuestion {
    question: string,
    answers: MultipleChoiceQuestionAnswer[],
    correctAnswerID: string
}

export interface MultipleChoiceQuestionAnswer {
    id: string,
    description: string
}