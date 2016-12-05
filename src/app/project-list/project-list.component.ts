import {Component, OnInit, Input} from '@angular/core';
import {Project} from '../project';
import {ProjectService} from '../project.service';
import '../rxjs-operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input() title: string;
  projects: Project[][] = [];

  constructor(private service: ProjectService) {
  }

  ngOnInit() {
    this.service.query()
      .subscribe(projects => {
        Observable.from(projects)
          .map((project, index) => {
            return {row: Math.floor(index / 4), project: project};
          })
          .groupBy(o => o.row, o => o.project)
          .map((groups, row) => {
            this.projects[row] = [];
            groups.map((project, col) => this.projects[row][col] = project).subscribe();
          })
          .subscribe();
      })
  }

}
