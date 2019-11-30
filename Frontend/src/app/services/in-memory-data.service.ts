import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const oils = [{
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
        return { oils };
    }
}
