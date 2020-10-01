import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageBoxService {
  messageText$: Subject<string> = new Subject();

  constructor() { }

  showMessage(message: string) {
    this.messageText$.next(message);
  }
}
