import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

    @Input()
    public filters: string[] = [];

    @Output()
    public selectClosed: EventEmitter<string[]> = new EventEmitter<string[]>();

    public selectedFilters = new FormControl([]);
    public filterFormControl = new FormControl('');
    public viewableFilters: string[] = [];

    constructor() { }

    ngOnInit() {
        this.viewableFilters = this.filters;

        this.filterFormControl.valueChanges
            .subscribe((value) =>
                this.viewableFilters = this.filters
                    .filter((filter) => filter.toLocaleUpperCase().includes(value.toLocaleUpperCase())));
    }

    public openedChange(opened: boolean): void {
        if (!opened) {
            this.filterFormControl.setValue('');

            this.selectClosed.emit(this.selectedFilters.value);
        }
    }

}
