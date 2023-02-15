import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EvaluationPerformanceService {
    constructor(private http: HttpClient) { }

    getEvaluation(): Observable<any> {
        return this.http.get(environment.apiEndpoint + '/api/evaluation', {observe: 'response', withCredentials: true});
    }
}
