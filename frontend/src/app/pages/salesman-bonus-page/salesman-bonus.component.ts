import { Component, OnInit } from '@angular/core';
import { SalesmanBonusService } from '../../services/salesman-bonus.service';
import { Router } from '@angular/router';
import {SalesmanDatapoint} from '../../interfaces/salesman-datapoint';
import {SalesmanDetailsService} from '../../services/salesman-details.service';

@Component({
    selector: 'app-salesman-bonus',
    templateUrl: './salesman-bonus.component.html',
    styleUrls: ['./salesman-bonus.component.css']
})
export class SalesmanBonusComponent implements OnInit {
    salesmen: SalesmanDatapoint[] = [];

    constructor(
        private salesmanBonusService: SalesmanBonusService,
        private salesmanDetailsService: SalesmanDetailsService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.getSalesmen();
    }

    getSalesmen(): void{
        this.salesmanBonusService.getAllSalesmen().subscribe((response): void => {
            if (response.status === 200){
                this.salesmen = response.body;
            }
        });
    }
    getBonusComputationSheet(salesman: SalesmanDatapoint): void {
        this.salesmanDetailsService.setSalesman(salesman);
        void this.router.navigate(['/salesman-details']);
    }
}
