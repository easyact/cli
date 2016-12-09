import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectComponent} from './project/project.component';
import {ProjectService} from './project.service';
import {ProjectBaseComponent} from './project-base/project-base.component';
import {ProjectMassComponent} from './project-mass/project-mass.component';
import {ProjectRoutingModule} from "./project.routing";

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectComponent,
    ProjectBaseComponent,
    ProjectMassComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    ProjectRoutingModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
