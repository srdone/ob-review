import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlashCardsComponent } from './flash-cards.component';
import { SharedModule } from '../shared';

const routes = [
    {path: '', component: FlashCardsComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        CommonModule
    ],
    declarations: [
        FlashCardsComponent
    ]
})
export class FlashCardsModule { }