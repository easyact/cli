import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProjectBaseComponent} from "./project-base/project-base.component";
import {ProjectComponent} from "./project/project.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'projects'},
  {
    path: 'projects',
    children: [
      {path: '', component: ProjectBaseComponent},
      {path: ':id', component: ProjectComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectRoutingModule {
}
