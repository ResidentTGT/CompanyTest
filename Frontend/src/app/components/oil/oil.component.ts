import { Component, OnInit } from '@angular/core';
import { Oil } from 'src/app/models/oil';

@Component({
    selector: 'app-oil',
    templateUrl: './oil.component.html',
    styleUrls: ['./oil.component.scss']
})
export class OilComponent implements OnInit {

    public dataSource: Oil[] = [{
        name: 'olo',
        mark: 'Brent',
        seller: 'Norway',
        region: 'Russia',
        buyer: 'Russia',
    }];

    public mainDisplayedColumns = [
        'name', 'mark', 'seller', 'region', 'buyer'
    ];

    public filterDisplayedColumns = [
        'name-filter', 'mark-filter', 'seller-filter', 'region-filter', 'buyer-filter'
    ];

    constructor() { }

    ngOnInit() {
    }

}
