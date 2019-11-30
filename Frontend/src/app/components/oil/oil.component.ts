import { Component, OnInit } from '@angular/core';
import { Oil } from 'src/app/models/oil';
import { Observable, EMPTY } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-oil',
    templateUrl: './oil.component.html',
    styleUrls: ['./oil.component.scss']
})
export class OilComponent implements OnInit {
    public oils: Oil[] = [];
    public viewableOils: Oil[] = [];

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

    public mainDisplayedColumns = [
        'name', 'mark', 'seller', 'region', 'buyer'
    ];

    public filterDisplayedColumns = [
        'name-filter', 'mark-filter', 'seller-filter', 'region-filter', 'buyer-filter'
    ];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.getOils()
            .pipe(tap((oils) => {
                this.viewableOils = this.oils = oils;

                this.nameFilters = Array.from(new Set(this.oils.map((oil) => oil.name)));
                this.markFilters = Array.from(new Set(this.oils.map((oil) => oil.mark)));
                this.sellerFilters = Array.from(new Set(this.oils.map((oil) => oil.seller)));
                this.regionFilters = Array.from(new Set(this.oils.map((oil) => oil.region)));
                this.buyerFilters = Array.from(new Set(this.oils.map((oil) => oil.buyer)));
            })).subscribe();
    }

    public getOils(): Observable<Oil[]> {
        return this.http.get<Oil[]>('api/oils')
            .pipe(
                tap(_ => console.log('oils fetched')),
                catchError((error) => {
                    console.log(`oils not fetched" ${error}`);
                    return EMPTY;
                })
            );
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
