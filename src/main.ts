import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { App, providers, routes } from './app'
import { HttpModule } from '@angular/http'
import { Main, Notes, AddTrip, Login, Trips } from './app/containers'
import { ReactiveFormsModule } from '@angular/forms';
import { ControlMessagesComponent } from './app/containers/control-messages.component';
import { ValidationService } from './app/containers/validation.service';

import { 
  AppBar,
  NoteCard,
  NoteCreator,
  ColorPicker,
} from './app/ui'

@NgModule({
  declarations: [
    App,
    Main,
    AppBar,
    NoteCard,
    Notes,
    NoteCreator,
    ColorPicker,
    AddTrip,
    Login,
    Trips,
    ControlMessagesComponent
  ],
  providers: [ ValidationService ],
  imports: [HttpModule, BrowserModule, FormsModule, routes, ReactiveFormsModule],
  bootstrap: [App]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
