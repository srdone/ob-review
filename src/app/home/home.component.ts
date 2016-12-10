import { Component, OnInit } from '@angular/core';

import { MultipleChoiceQuestion } from '../shared';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title = 'Home!';

    ngOnInit() {
        
    }
}