import { Component, OnInit } from '@angular/core';

import { FlashCardContent, Test, Category } from '../shared';
import { FlashCardsDataService } from '../core';

@Component({
    selector: 'flash-cards',
    templateUrl: './flash-cards.component.html',
    styleUrls: ['./flash-cards.component.css']
})
export class FlashCardsComponent implements OnInit {
    title = 'Flash Cards!';
    flashCards: FlashCardContent[];
    tests: Test[] = [
        "Midterm", "Final"
    ];
    selectedTest: Test = "Final";

    constructor(private flashCardsDataService: FlashCardsDataService) {}

    ngOnInit() {
        this.flashCards = this.flashCardsDataService.getFlashCardData().filter(item => item.test === this.selectedTest);
    }
}