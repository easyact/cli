import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import './rxjs-operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EasyAct';
  observable$: Observable<{}>;

  constructor(http: Http) {
    this.observable$ = http
      .get('/api/public/simple')
      .map((response: Response) => response.json());
  }
}
