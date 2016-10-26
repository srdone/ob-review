import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes = [
    {path: '', component: HomeComponent}
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: []
})
export class HomeModule { }