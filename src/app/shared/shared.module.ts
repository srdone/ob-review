import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlashCardComponent } from './flash-card';

@NgModule({
    imports: [CommonModule],
    declarations: [
        FlashCardComponent
    ],
    exports: [
        FlashCardComponent
    ]
})
export class SharedModule {}