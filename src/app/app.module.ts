import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', loadChildren: 'app/home/home.module#HomeModule'},
      {path: 'crucial-conversations', loadChildren: 'app/crucial-conversations/crucial-conversations.module#CrucialConversationsModule'},
      {path: 'managing-conflict', loadChildren: 'app/managing-conflict/managing-conflict.module#ManagingConflictModule'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
