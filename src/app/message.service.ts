import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[] = [];

  add(source: string, text: string) {
    console.log(text);
    this.messages = [{source, text}].concat(this.messages);
  }

  clear() {
    this.messages = [];
  }
}
