import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fpolicy } from './fpolicy';
import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FpolicyService {
  constructor(private _httpService: HttpClient) {}

  getAllFpolicy(): Observable<Fpolicy[]> {
    return this._httpService.get<Fpolicy[]>('http://localhost:8080/getAll');
  }

  private handleError(error: HttpResponse<string>) {
    return Observable.throw(error);
  }

  addPolicy(policy: Fpolicy): Observable<Fpolicy> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let body = JSON.stringify(policy);
    return this._httpService.post<Fpolicy>(
      'http://localhost:8080/insert',
      body,
      httpOptions
    );
  }

  deletePolicy(fpolicyId: number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._httpService.delete('http://localhost:8080/delete/'+fpolicyId);
  }
}
