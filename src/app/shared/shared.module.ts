import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlashCardComponent } from './flash-card';
import { MultipleChoiceComponent } from './multiple-choice';
import { ToggleableFlashCardComponent } from './toggleable-flash-card';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        FlashCardComponent,
        ToggleableFlashCardComponent,
        MultipleChoiceComponent
    ],
    exports: [
        FlashCardComponent,
        ToggleableFlashCardComponent,
        MultipleChoiceComponent
    ]
})
export class SharedModule {}