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
  project: Project = {};
  editing = {name: false};
  private resource: Resource;

  constructor(private factory: ResourceFactory, private route: ActivatedRoute) {
    this.resource = factory.$create('projects');
  }

  ngOnInit() {
    this.route.params
      .switchMap(params => this.resource.get(params['id']))
      .subscribe(o => this.project = o);
  }

  update() {
    console.log(`updating ${this.project}`);
    this.resource.put(this.project['_id'], this.project).subscribe(p => {
      this.project = p;
      this.editing.name = false;
    });
  }
}
