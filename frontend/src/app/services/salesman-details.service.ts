import { Injectable } from '@angular/core';
import { SalesmanDatapoint } from '../interfaces/salesman-datapoint';

@Injectable({
    providedIn: 'root'
})
export class SalesmanDetailsService {
    private salesman: SalesmanDatapoint;

    constructor() {}

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/explicit-function-return-type
    setSalesman(salesman: SalesmanDatapoint) {
        this.salesman = salesman;
    }

    getSalesman(): SalesmanDatapoint {
        return this.salesman;
    }
}
