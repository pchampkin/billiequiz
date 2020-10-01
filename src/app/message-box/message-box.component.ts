import { Component, OnInit } from '@angular/core';
import { MessageBoxService } from '../message-box.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  message: string;

  constructor(private messageBox: MessageBoxService) { }

  ngOnInit(): void {
    this.messageBox.messageText$.subscribe(m => {
      this.message = m;
    });
  }

  closeMessageBox() {
    this.message = null;
  }

}
