import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './components/app/app.component';
import { OilComponent } from './components/oil/oil.component';

@NgModule({
    declarations: [
        AppComponent,
        OilComponent
    ],
    imports: [
        BrowserModule,
        MatTableModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
