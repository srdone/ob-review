import { Component, OnInit } from '@angular/core';

import { FlashCardContent, Test, Category } from '../shared';
import { FlashCardsDataService } from '../core';

import * as _ from 'lodash';

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
    categories: any[] = [];
    selectedTest: Test = "Final";
    selectedCategory: Category | "All" = "All";

    constructor(private flashCardsDataService: FlashCardsDataService) {}

    ngOnInit() {
        this.flashCards = this.flashCardsDataService.getFlashCardData()
            .filter(item => item.test === this.selectedTest)
            .filter(item => {
                if (!this.selectedCategory) {
                    return true;
                }
                if (this.selectedCategory === "All") {
                    return true;
                }
                return item.category === this.selectedCategory;
            });

       this.categories = _(this.flashCardsDataService.getFlashCardData())
            .filter({test: this.selectedTest})
            .map('category')
            .uniq()
            .unshift("All")
            .value();
    }

    changeSelectedTest(test: Test) {
        this.selectedTest = test;
        this.selectedCategory = "All";
        this.ngOnInit();
    }

    changeSelectedCategory(category: Category) {
        this.selectedCategory = category;
        this.ngOnInit();
    }
}