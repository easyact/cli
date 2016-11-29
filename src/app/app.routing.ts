import {RouterModule, Route} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ProjectListComponent} from './project-list/project-list.component';

const routes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: 'projects'},
  {path: 'projects', component: ProjectListComponent}
  // { loadChildren: 'app/dashboard/dashboard.module#DashboardModule', path: 'dashboard' },
  // { loadChildren: 'app/profile/profile.module#ProfileModule', path: 'profile' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: true
  }
);
