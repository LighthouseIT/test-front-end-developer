import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

    uri = 'https://lighthouse-test-front-end.firebaseio.com/estimatedExpenses.json';

    constructor(private http: Http) {

    }

    obterExpenses(): Promise<any> {
        return this.http.get(this.uri).toPromise();
    }

}
