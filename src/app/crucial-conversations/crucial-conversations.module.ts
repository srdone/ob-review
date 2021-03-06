import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CrucialConversationsComponent } from './crucial-conversations.component';

const routes = [
    {path: '', component: CrucialConversationsComponent}
];

@NgModule({
    declarations: [
        CrucialConversationsComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: []
})
export class CrucialConversationsModule { }