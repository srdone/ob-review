import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { MultipleChoiceQuestion } from './multiple-choice-question.interface';

@Component({
    selector: 'multiple-choice-question',
    templateUrl: './multiple-choice-question.component.html',
    styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent {
    @Input('question') question: MultipleChoiceQuestion;
    @Output('answered') answered$ = new Subject();
    selectAnswer$ = new Subject();
    
}