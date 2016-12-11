import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Project} from "./project";
import {ResourceFactory, Resource} from "./rest.service";

@Injectable()
export class ProjectService {
  private resource: Resource;

  constructor(private resourceFactory: ResourceFactory) {
    this.resource = resourceFactory.$create('projects');
  }

  query(): Observable<Project[]> {
    return this.resource.query();
  }

  get(id): Observable<Project> {
    return this.resource.get(id);
  }
}
