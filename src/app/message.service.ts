import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[] = [];

  add(source: string, text: string) {
    this.messages.push({source, text});
  }

  clear() {
    this.messages = [];
  }
}
