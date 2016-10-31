import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlashCardComponent } from './flash-card';
import { ToggleableFlashCardComponent } from './toggleable-flash-card';

@NgModule({
    imports: [CommonModule],
    declarations: [
        FlashCardComponent,
        ToggleableFlashCardComponent
    ],
    exports: [
        FlashCardComponent,
        ToggleableFlashCardComponent
    ]
})
export class SharedModule {}