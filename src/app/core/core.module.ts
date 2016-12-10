import {
    NgModule,
    Optional,
    SkipSelf
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared';
import { FlashCardsDataService, MultipleChoiceQuestionDataService } from './services';

@NgModule({
    imports: [CommonModule, SharedModule],
    providers: [
        FlashCardsDataService,
        MultipleChoiceQuestionDataService
    ]
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('Core module is already loaded. Import it in the AppModule only.');
        }
    }

}