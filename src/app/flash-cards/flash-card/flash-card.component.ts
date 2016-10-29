import { Component, Input } from '@angular/core';

import { FlashCardContent } from './flash-card-content.interface';

@Component({
    selector: 'flash-card',
    templateUrl: './flash-card.component.html',
    styleUrls: ['./flash-card.component.css']
})
export class FlashCardComponent {
    title = 'I am a flash card!';
    @Input('flash-card') flashCard: FlashCardContent;
}