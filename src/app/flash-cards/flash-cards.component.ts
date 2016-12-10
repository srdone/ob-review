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
    categories: Array<Category | "All"> = [
        "All",
        "Teams",
        "Personality",
        "Diversity",
        "Supportive Communication",
        "Conflict Management",
        "Crucial Conversations",
        "Stress Management",
        "Creativity",
        "Power and Influence",
        "Motivation",
        "Empowerment",
        "Calling"
    ]
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
    }

    changeSelectedTest(test: Test) {
        this.selectedTest = test;
        this.ngOnInit();
    }

    changeSelectedCategory(category: Category) {
        this.selectedCategory = category;
        this.ngOnInit();
    }
}