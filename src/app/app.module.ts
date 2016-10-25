import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CrucialConversationsModule, CrucialConversationsComponent } from './crucial-conversations';
import { ManagingConflictModule, ManagingConflictComponent } from './managing-conflict';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CrucialConversationsModule,
    ManagingConflictModule,
    RouterModule.forRoot([
      {path: '', component: ManagingConflictComponent},
      {path: 'crucial-conversations', component: CrucialConversationsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
