export interface MultipleChoiceQuestion {
  id: string,
  correctAnswerId: string,
  answers: Answer[],
  question: string
}

export interface Answer {
  label: string,
  id: string,
  message?: string
}