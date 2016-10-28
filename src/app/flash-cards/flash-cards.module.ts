import { NgModule } from '@angular/core';
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
        RouterModule.forChild(routes)
    ],
    providers: [FlashCardsDataService]
})
export class FlashCardsModule { }