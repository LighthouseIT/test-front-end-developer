import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
    private messageSource: BehaviorSubject<boolean> = new BehaviorSubject(true);
    public message = this.messageSource.asObservable();
    public redraw(value: boolean) {
        this.messageSource.next(value);
    }
}
