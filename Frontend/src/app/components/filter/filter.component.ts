import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

    private _allFilters: string[] = [];

    @Input()
    public set filters(filters: string[]) {
        this.viewableFilters = this._allFilters = filters;
    }

    @Output()
    public selectClosed: EventEmitter<string[]> = new EventEmitter<string[]>();

    public selectedFilters = new FormControl([]);
    public filterFormControl = new FormControl('');
    public viewableFilters: string[] = [];

    constructor() { }

    ngOnInit() {
        this.filterFormControl.valueChanges
            .subscribe((value) =>
                this.viewableFilters = this._allFilters
                    .filter((filter) => filter.toLocaleUpperCase().includes(value.toLocaleUpperCase())));
    }

    public openedChange(opened: boolean): void {
        if (!opened) {
            this.filterFormControl.setValue('');

            this.selectClosed.emit(this.selectedFilters.value);
        }
    }

}
