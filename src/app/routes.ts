import { RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import {  Main, Notes, About, Login, Trips  }   from './containers'

export const routes: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: Main,
        children: [
            { path: 'notes', component: Notes},
            { path: 'about', component: About },
            { path: 'login', component: Login },
            { path: 'trips', component: Trips }
        ]
    },
    { path : '**', redirectTo: ''}

])