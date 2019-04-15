import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectOneComponent } from './project-one/project-one.component';
import { ProjectTwoComponent } from './project-two/project-two.component';
import { ProjectThreeComponent } from './project-three/project-three.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path:  'project-one', component:  ProjectOneComponent},
  { path:  'project-two', component:  ProjectTwoComponent},
  { path:  'project-three', component:  ProjectThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ProjectOneComponent, ProjectTwoComponent, ProjectThreeComponent]
