import { Component, OnInit } from '@angular/core';
import {SalesmanDatapoint} from '../../interfaces/salesman-datapoint';
import {PerformanceDatapoint} from '../../interfaces/performance-datapoint';
import {SalesmanDetailsService} from '../../services/salesman-details.service';
import {SocialPerformanceService} from '../../services/social-performance.service';
import { SalesmanBonusService } from '../../services/salesman-bonus.service';
import { EvaluationPerformanceService} from '../../services/evaluation-performance.services';

@Component({
    selector: 'app-salesman-details',
    templateUrl: './salesman-details.component.html',
    styleUrls: ['./salesman-details.component.css']
})
export class SalesmanDetailsComponent implements OnInit {
    salesman: SalesmanDatapoint;
    performance: PerformanceDatapoint[] = [];
    evaluation: any;
    L_Bonus: number;
    O_Bonus: number;
    S_Bonus: number;
    A_Bonus: number;
    C_Bonus: number;
    I_Bonus: number;
    Total_Bonus: number;
    remark: string;
    approved = false;

    constructor(private salesmanDetailsService: SalesmanDetailsService,
                private socialPerformanceService: SocialPerformanceService,
                private salesmanBonusService: SalesmanBonusService,
                private evaluationPerformanceService: EvaluationPerformanceService){ }

    ngOnInit(): void {
        this.salesman = this.salesmanDetailsService.getSalesman();
        this.getEvaluation();
        this.getPerformance();
    }

    getEvaluation(): void{
        this.evaluationPerformanceService.getEvaluation().subscribe((response): void => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (response.status === 200){
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
                this.evaluation = response.body;
                console.log(this.evaluation);
            }
        });
    }

    getPerformance(): void{
        this.socialPerformanceService.getSocial_Performance(this.salesman.code).subscribe((response): void => {
            if (response.status === 200){
                this.performance = response.body;
                this.L_Bonus = 10 * (1 + (this.performance[0].leadership - 1) * 1.5);
                this.O_Bonus = 10 * (1 + (this.performance[0].openness - 1) * 1.5);
                this.S_Bonus = 10 * (1 + (this.performance[0].social - 1) * 1.5);
                this.A_Bonus = 10 * (1 + (this.performance[0].attitude - 1) * 1.5);
                this.C_Bonus = 10 * (1 + (this.performance[0].communication - 1) * 1.5);
                this.I_Bonus = 10 * (1 + (this.performance[0].integrity - 1) * 1.5);
                this.Total_Bonus = this.L_Bonus + this.O_Bonus + this.S_Bonus + this.A_Bonus + this.C_Bonus + this.I_Bonus;
            }
        });
    }

    updateRemark(): void {
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        this.socialPerformanceService.updateRemark(this.salesman.code, this.remark).subscribe((response) => {
            if (response.status === 200) {
                console.log('Remarks updated successfully' + this.remark);
            }
        });
    }
    storeBonus(): void {
        if (this.approved === true){
            this.salesmanBonusService.storeBonus(this.Total_Bonus, this.salesman.year_of_performance, this.salesman.employee_ID).
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                subscribe(response => {
                    if (response.status === 200) {
                        console.log('Bonus stored successfully');
                    }
                });
        }
        else {
            alert('CEO must approve to store the bonus');
        }
    }

    CEOapprove(): void {
        this.approved = !this.approved;
        console.log(this.approved);
    }
}
