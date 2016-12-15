import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Project} from "../project";
import {ResourceFactory, Resource} from "../rest.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: Project = {tasks: []};
  editing = {name: false};
  private resource: Resource;
  private err;

  constructor(private factory: ResourceFactory, private route: ActivatedRoute) {
    this.resource = factory.$create('projects');
  }

  ngOnInit() {
    this.route.params
      .switchMap(params => this.resource.get(params['id']))
      .subscribe(o => this.project = o);
  }

  set() {
    console.log(`Http putting project`, this.project);
    this.resource.put(this.project['_id'], this.project)
      .catch(e => this.err = e)
      .subscribe(p => {
        this.editing.name = false;
      });
  }
}
