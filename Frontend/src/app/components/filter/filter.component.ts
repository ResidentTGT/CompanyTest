import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

    @Input()
    public set filters(filters: string[]) {
        this.viewableFilters = this.allFilters = filters;
    }

    @Output()
    public selectClosed: EventEmitter<string[]> = new EventEmitter<string[]>();

    public selectedFilters = new FormControl([]);
    public filterFormControl = new FormControl('');
    public allFilters: string[] = [];
    public viewableFilters: string[] = [];

    constructor() { }

    ngOnInit() {
        this.filterFormControl.valueChanges
            .subscribe((value) =>
                this.viewableFilters = this.allFilters
                    .filter((filter) => filter.toLocaleUpperCase().includes(value.toLocaleUpperCase())));
    }

    public openedChange(opened: boolean): void {
        if (!opened) {
            this.filterFormControl.setValue('');

            this.selectClosed.emit(this.selectedFilters.value);
        }
    }

}
