import { Inject, inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from '../tokens/BaseAPI.token';

@Injectable({
    providedIn: 'root',
})
export class EzstoreHelperService {
    constructor(private http: HttpClient,  @Inject(BASE_API_URL) private apiUrl: string) {}

    getData(apiUrl: string) {
        return this.http.get(apiUrl);
    }

    // Example helper method
    formatCurrency(amount: number, currency: string = 'USD'): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
        }).format(amount);
    }

    // Add more helper methods as needed
}