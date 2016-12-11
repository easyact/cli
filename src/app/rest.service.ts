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

/*
 不能把http方法抽出来. 因为http方法用了this
 */
export class Resource {
  constructor(private http: Http, private base: String) {
  }

  query<T>(): Observable<T[]> {
    return this.http.get(`${this.base}.json`).map(o => o.json());
  }

  get<T>(id): Observable<T> {
    return this.http.get(`${this.base}/${id}.json`).map(o => o.json());
  }

  put(id, body) {
    return this.http.put(`${this.base}/${id}.json`, body).map(o => o.json());
  }

  post(body) {
    return this.http.post(`${this.base}${''}.json`, body).map(o => o.json());
  }
}
