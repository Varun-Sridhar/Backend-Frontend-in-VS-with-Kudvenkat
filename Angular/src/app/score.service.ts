//import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import { IScore } from './score/score';

//@Injectable()
//export class ScoreService {
//    constructor(private _http: Http) { }

//    getEmployees(): Observable<IScore[]> {
//        return this._http.get("https://localhost:44339/Api/Score").map((response: Response) => <IScore[]>response.json());
//    }
//}