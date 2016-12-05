import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-base',
  templateUrl: './project-base.component.html',
  styleUrls: ['./project-base.component.css']
})
export class ProjectBaseComponent implements OnInit {
  project = {};

  constructor(private http: Http, private router: Router) {
  }

  ngOnInit() {
  }

  newProject() {
    this.http.post('api/public/projects.json', this.project).subscribe(
      id => this.router.navigate(['/projects', id.text()])
    );
  }
}
