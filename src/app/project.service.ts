import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {Project} from './project';

@Injectable()
export class ProjectService {
  constructor(private http: Http) {
  }

  query(): Observable<Project[]> {
    return this.http.get('/api/public/projects.json').map(projects => projects.json());
  }

  get(id): Observable<Project> {
    return this.http.get(`/api/public/projects/${id}.json`).map(p => p.json());
  }
}
