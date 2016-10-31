import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { CoreModule } from './core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: '', loadChildren: 'app/home/home.module#HomeModule'},
      {path: 'crucial-conversations', loadChildren: 'app/crucial-conversations/crucial-conversations.module#CrucialConversationsModule'},
      {path: 'managing-conflict', loadChildren: 'app/managing-conflict/managing-conflict.module#ManagingConflictModule'},
      {path: 'flash-cards', loadChildren: 'app/flash-cards/flash-cards.module#FlashCardsModule'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
