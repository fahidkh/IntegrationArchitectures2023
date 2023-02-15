import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanBonusComponent } from './salesman-bonus.component';

describe('tExamplePageComponen', () => {
    let component: SalesmanBonusComponent;
    let fixture: ComponentFixture<SalesmanBonusComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ SalesmanBonusComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SalesmanBonusComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
