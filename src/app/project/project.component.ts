import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Project} from "../project";
import {Resource} from "../rest.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: Project = {};
  editing = {};
  private resource: Resource;

  constructor(private factory: Resource, private route: ActivatedRoute) {
    this.resource = factory.$create('projects');
  }

  ngOnInit() {
    this.route.params
      .switchMap(params => this.resource.get(params['id']))
      .subscribe(proj => {
        this.project = proj;
        // console.log(this.project);
      });
  }

  update() {
    this.resource.put(this.project['_id'], this.project);
  }
}
