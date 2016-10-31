import { Component, OnInit } from '@angular/core';

import { FlashCardContent } from '../shared';
import { FlashCardsDataService } from '../core';

@Component({
    selector: 'flash-cards',
    templateUrl: './flash-cards.component.html',
    styleUrls: ['./flash-cards.component.css']
})
export class FlashCardsComponent implements OnInit {
    title = 'Flash Cards!';
    flashCards: FlashCardContent[]

    constructor(private flashCardsDataService: FlashCardsDataService) {}

    ngOnInit() {
        this.flashCards = this.flashCardsDataService.getFlashCardData();
    }
}