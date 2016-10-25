import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ManagingConflictComponent } from './managing-conflict.component';

@NgModule({
    declarations: [
        ManagingConflictComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: []
})
export class ManagingConflictModule { }