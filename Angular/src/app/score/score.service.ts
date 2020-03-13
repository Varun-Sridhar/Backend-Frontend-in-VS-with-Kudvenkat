import { Injectable } from '@angular/core';
import { IScore } from './score';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ScoreService {

    constructor(private _http: Http) { }

    getScores(): Observable<IScore[]> {
        return this._http.get("https://localhost:44397/api/score").map((response: Response) => <IScore[]>response.json());
    }
}