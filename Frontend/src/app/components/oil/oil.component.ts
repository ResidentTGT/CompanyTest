import { Component, OnInit } from '@angular/core';
import { Oil } from 'src/app/models/oil';

@Component({
    selector: 'app-oil',
    templateUrl: './oil.component.html',
    styleUrls: ['./oil.component.scss']
})
export class OilComponent implements OnInit {



    public viewableOils: Oil[] = [];

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

    public nameFilters: string[] = [];
    public markFilters: string[] = [];
    public sellerFilters: string[] = [];
    public regionFilters: string[] = [];
    public buyerFilters: string[] = [];

    public selectedMarks: string[] = [];
    public selectedNames: string[] = [];
    public selectedSellers: string[] = [];
    public selectedRegions: string[] = [];
    public selectedBuyers: string[] = [];

    constructor() { }

    ngOnInit() {
        this.viewableOils = this.oils;

        this.nameFilters = Array.from(new Set(this.oils.map((oil) => oil.name)));
        this.markFilters = Array.from(new Set(this.oils.map((oil) => oil.mark)));
        this.sellerFilters = Array.from(new Set(this.oils.map((oil) => oil.seller)));
        this.regionFilters = Array.from(new Set(this.oils.map((oil) => oil.region)));
        this.buyerFilters = Array.from(new Set(this.oils.map((oil) => oil.buyer)));
    }

    public filterOils(): void {
        this.viewableOils = this.oils.filter((oil) =>
            ((!!this.selectedNames.length && !this.selectedNames.includes(oil.name)) ||
                (!!this.selectedMarks.length && !this.selectedMarks.includes(oil.mark)) ||
                (!!this.selectedSellers.length && !this.selectedSellers.includes(oil.seller)) ||
                (!!this.selectedRegions.length && !this.selectedRegions.includes(oil.region)) ||
                (!!this.selectedBuyers.length && !this.selectedBuyers.includes(oil.buyer))
                ? false : true));
    }

}
