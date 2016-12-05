import {Component, OnInit, Input} from '@angular/core';
import {Project} from "../project";
import {ProjectService} from "../project.service";

@Component({
  selector: 'app-project-mass',
  templateUrl: './project-mass.component.html',
  styleUrls: ['./project-mass.component.css']
})
export class ProjectMassComponent implements OnInit {
  @Input() title: string;
  projects: Project[];

  constructor(private service: ProjectService) {
  }

  ngOnInit() {
    this.service.query()
      .subscribe(projects => this.projects = projects)
  }
}
