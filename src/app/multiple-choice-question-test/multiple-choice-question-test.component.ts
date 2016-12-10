import { Component, OnInit } from '@angular/core';

import { MultipleChoiceQuestion } from '../shared';
import { MultipleChoiceQuestionDataService } from '../core';

@Component({
    selector: 'multiple-choice-question-test',
    templateUrl: './multiple-choice-question-test.component.html',
    styleUrls: ['./multiple-choice-question-test.component.css']
})
export class MultipleChoiceQuestionTestComponent implements OnInit {
    title = 'Multiple Choice Questions Test!';
    questions: MultipleChoiceQuestion[];

    constructor(private questionDataService: MultipleChoiceQuestionDataService) {}

    ngOnInit() {
        this.questions = this.questionDataService.getQuestions();
    }
}