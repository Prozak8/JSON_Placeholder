import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import {HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'users', component: UsersComponent }, 
    { path: 'homepage', component: HomepageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}