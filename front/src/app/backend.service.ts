import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../environments/environment';
import { Project } from './shared';


@Injectable()
export class BackendService {

  constructor(private http: Http) { }

  public sendEmail(address: string, message: string): Observable<void> {
    return this.requestVoid(`${environment.backend.url}/joinus`, {
      email: address,
      body: message
    });
  }

  public signup(address: string, project: Project): Observable<void> {
    return this.requestVoid(`${environment.backend.url}/signup`, {
      email: address,
      project: project.prefix
    });
  }

  private requestVoid(url: string, data: {}, method: string = 'post'): Observable<void> {
    return this.http[method](url, data).map(response => {}).catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
