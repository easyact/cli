import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {Project} from './project';

@Injectable()
export class ProjectService {
  constructor(private http: Http) {
  }

  query(): Observable<Project[]> {
    return this.http.get('/api/public/projects').map(p => p.json());
  }
}
