import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {SalesmanDatapoint} from '../interfaces/salesman-datapoint';
import {environment} from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class SalesmanBonusService {
    constructor(private http: HttpClient) { }

    getAllSalesmen(): Observable<HttpResponse<SalesmanDatapoint[]>>{
        return this.http.get<SalesmanDatapoint[]>(environment.apiEndpoint + '/api/salesmen', {observe: 'response', withCredentials: true});
    }

    storeBonus(value: number, year: number, ID: string): Observable<HttpResponse<any>> {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this.http.post<any>(environment.apiEndpoint + `/api/bonussalary/${ID}/${value}/${year}`,
            {observe: 'response', withCredentials: true});
    }
}
