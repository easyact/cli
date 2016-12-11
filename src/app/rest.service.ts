import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class ResourceFactory {

  constructor(private http: Http) {
  }

  $create(resource: String): Resource {
    return new Resource(this.http, `/api/public/${resource}`);
  }
}

export class Resource {
  constructor(private http: Http, private base: String) {
  }

  query<T>(): Observable<T[]> {
    return this.httpDo(this.http.get);
  }

  get<T>(id): Observable<T> {
    return this.httpDoById(this.http.get, id);
  }

  put(id, body) {
    return this.httpDoById(this.http.put, id, body);
  }

  post(body) {
    return this.httpDo(this.http.post, '', body);
  }

  private httpDoById(action, id, body?) {
    return this.httpDo(action, `/${id}`, body);
  }

  private httpDo(action, path?: string, body?: string) {
    return action(`${this.base}${path}.json`, body).map(o => o.json());
  }
}
