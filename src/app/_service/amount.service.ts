import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AmountService {

    uri = 'https://lighthouse-test-front-end.firebaseio.com/amount.json';

    constructor(private http: Http) {

    }

    getAmount(): Promise<any> {
        return this.http.get(this.uri).toPromise();
    }
}
