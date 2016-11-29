import {Component, OnInit, Input} from '@angular/core';
import {Project} from '../project';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input() title: string;
  projects: Project[];

  constructor(private service: ProjectService) {
  }

  ngOnInit() {
    this.service.query().subscribe(projects => {
      console.log(projects);
      this.projects = projects;
    });
  }

}
