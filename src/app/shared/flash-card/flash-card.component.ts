import { Component, Input } from '@angular/core';

import { FlashCardContent } from './flash-card-content.interface';

@Component({
    selector: 'flash-card',
    templateUrl: './flash-card.component.html',
    styleUrls: ['./flash-card.component.css']
})
export class FlashCardComponent {
    @Input('flash-card') flashCard: FlashCardContent;
    @Input('show-term') showTerm: boolean;
    @Input('show-definition') showDefinition: boolean;
}