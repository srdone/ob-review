import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ManagingConflictComponent } from './managing-conflict.component';

const routes = [
    {path: '', component: ManagingConflictComponent }
];

@NgModule({
    declarations: [
        ManagingConflictComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: []
})
export class ManagingConflictModule { }