import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlashCardsComponent } from './flash-cards.component';
import { FlashCardComponent, FlashCardsDataService } from './flash-card';

const routes = [
    {path: '', component: FlashCardsComponent}
]

@NgModule({
    declarations: [
        FlashCardsComponent,
        FlashCardComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    providers: [FlashCardsDataService]
})
export class FlashCardsModule { }