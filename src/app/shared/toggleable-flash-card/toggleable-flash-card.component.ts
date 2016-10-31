import { Component, Input } from '@angular/core';

import { FlashCardContent } from '../../shared';

@Component({
    selector: 'toggleable-flash-card',
    templateUrl: './toggleable-flash-card.component.html',
    styleUrls: ['./toggleable-flash-card.component.css']
})
export class ToggleableFlashCardComponent {
    toggled = false;
    @Input('flash-card') flashCard: FlashCardContent;
}