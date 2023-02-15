import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {PerformanceDatapoint} from '../interfaces/performance-datapoint';
import {environment} from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class SocialPerformanceService {
    constructor(private http: HttpClient) { }

    getSocial_Performance(code: string): Observable<HttpResponse<PerformanceDatapoint[]>>{
        return this.http.get<PerformanceDatapoint[]>(environment.apiEndpoint + `/api/performance/${code}`,
            {observe: 'response', withCredentials: true});
    }

    updateRemark(code: string, remark: string): Observable<HttpResponse<PerformanceDatapoint[]>>{
        return this.http.put<PerformanceDatapoint[]>(environment.apiEndpoint + `/api/performance/${code}`, {remark},
            {observe: 'response', withCredentials: true});
    }
}
