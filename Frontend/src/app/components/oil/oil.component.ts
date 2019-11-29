import { Component, OnInit } from '@angular/core';
import { Oil } from 'src/app/models/oil';

@Component({
    selector: 'app-oil',
    templateUrl: './oil.component.html',
    styleUrls: ['./oil.component.scss']
})
export class OilComponent implements OnInit {

    public oils: Oil[] = [{
        name: 'Нефть 1',
        mark: 'Brent',
        seller: 'Norway',
        region: 'Bergen',
        buyer: 'Germany',
    },
    {
        name: 'Нефть 2',
        mark: 'WTI',
        seller: 'USA',
        region: 'Alaska',
        buyer: 'China',
    },
    {
        name: 'Нефть 3',
        mark: 'Dubai Crude',
        seller: 'UAE',
        region: 'Dubai',
        buyer: 'France',
    },
    {
        name: 'Нефть 4',
        mark: 'Urals',
        seller: 'Russia',
        region: 'Syberia',
        buyer: 'India',
    }];

    public mainDisplayedColumns = [
        'name', 'mark', 'seller', 'region', 'buyer'
    ];

    public filterDisplayedColumns = [
        'name-filter', 'mark-filter', 'seller-filter', 'region-filter', 'buyer-filter'
    ];

    public selectedNames: string[] = [];
    public selectedMarks: string[] = [];
    public selectedSellers: string[] = [];
    public selectedRegions: string[] = [];
    public selectedBuyers: string[] = [];

    constructor() { }

    ngOnInit() {
    }

}
