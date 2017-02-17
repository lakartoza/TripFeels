import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { App, providers, routes } from './app'
import { HttpModule } from '@angular/http'
import { Main, Notes, AddTrip, Login, Trips } from './app/containers'

import { 
  AppBar,
  NoteCard,
  NoteCreator,
  ColorPicker
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
    Trips
  ],
  providers,
  imports: [HttpModule, BrowserModule, FormsModule, routes],
  bootstrap: [App]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
