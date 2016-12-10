import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MultipleChoiceQuestionTestComponent } from './multiple-choice-question-test.component';
import { SharedModule } from '../shared';

const routes = [
    {path: '', component: MultipleChoiceQuestionTestComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule
    ],
    declarations: [
        MultipleChoiceQuestionTestComponent
    ]
})
export class MultipleChoiceQuestionTestModule { }