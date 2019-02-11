import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReleaseNotesComponent } from './release-notes/release-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    ReleaseNotesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
