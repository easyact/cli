import {RouterModule, Route} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ProjectBaseComponent} from './project-base/project-base.component';
import {ProjectComponent} from './project/project.component';

const routes: Route[] = [
  // {path: '', pathMatch: 'full', redirectTo: 'projects'},
  // {path: 'projects', component: ProjectBaseComponent},
  // {path: 'projects/:id', component: ProjectComponent}
  // { loadChildren: 'app/dashboard/dashboard.module#DashboardModule', path: 'dashboard' },
  // { loadChildren: 'app/profile/profile.module#ProfileModule', path: 'profile' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: true
  }
);
