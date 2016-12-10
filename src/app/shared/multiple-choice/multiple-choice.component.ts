import { Component, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';

import { MultipleChoiceQuestion, Answer } from './multiple-choice-question.interface';

@Component({
  selector: 'multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements AfterViewInit {
  @Input('question') question: MultipleChoiceQuestion
  @Input() selectedAnswerId: string
  @Output() selectedAnswerIdChange: EventEmitter<Answer> = new EventEmitter<Answer>();
  @ViewChild('formRef') form;

  ngAfterViewInit() {
    this.form.valueChanges.subscribe((selection) => {
      this.selectedAnswerIdChange.emit(selection);
    });
  }

  isAnswerCorrect() {
    if (!this.selectedAnswerId) {
      return false;
    }
    return this.selectedAnswerId === this.question.correctAnswerId;
  }
}