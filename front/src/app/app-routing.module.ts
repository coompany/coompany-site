import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { JournalComponent } from './journal';
import { ProjectComponent } from './project/project.component';
import { ProjectResolver } from './project.resolver';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'journal',
    component: JournalComponent
  }, {
    path: 'projects/:name',
    component: ProjectComponent,
    resolve: {
      project: ProjectResolver
    }
  }, {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
