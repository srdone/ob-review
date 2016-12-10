import { Injectable } from '@angular/core';
import { MultipleChoiceQuestion } from '../../shared';

@Injectable()
export class MultipleChoiceQuestionDataService {

  private multipleChoiceQuestions: MultipleChoiceQuestion[] = [
    {
      id: 'testquestion1',
      correctAnswerId: 'a',
      answers: [
        {id: 'a', label: 'Correct Answer', message: 'Correct! Answer A is right'},
        {id: 'b', label: 'Wrong Answer', message: 'WahWah! Answer B is wrong'}
      ],
      question: 'Test Question 1'
    }
  ]

  getQuestions() {
    return this.multipleChoiceQuestions;
  }

}