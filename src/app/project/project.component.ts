import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../project.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Project} from "../project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: Project;

  constructor(private serivce: ProjectService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .switchMap(params => this.project = this.serivce.get(params['id']))
      .subscribe(proj => this.project = proj);
  }

}
