import { Injectable } from '@angular/core';
import { FlashCardContent } from './flash-card-content.interface';

@Injectable()
export class FlashCardsDataService {

    private flashCardContent: FlashCardContent[] = [
        {term: 'Test Content', definition: 'It is fake content'},
        {term: 'More test content', definition: 'It is more fake content'}
    ]

    getFlashCardData() {
        return this.flashCardContent;
    }

}