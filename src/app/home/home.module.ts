import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';
import { HomeComponent } from './home.component';

const routes = [
    {path: '', component: HomeComponent}
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule
    ],
    providers: []
})
export class HomeModule { }