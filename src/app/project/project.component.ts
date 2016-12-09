import {Component, OnInit} from "@angular/core";
import {ProjectService} from "../project.service";
import {ActivatedRoute} from "@angular/router";
import {Project} from "../project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: Project = {};
  editing = {};

  constructor(private serivce: ProjectService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .switchMap(params => this.serivce.get(params['id']))
      .subscribe(proj => {
        this.project = proj;
        // console.log(this.project);
      });
  }

}
