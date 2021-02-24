import { Component, OnInit, ElementRef } from '@angular/core';
import { MessageBoxService } from '../message-box.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  message: string;
  private ngUnsubscribe$ = new Subject();

  constructor(private messageBoxSvc: MessageBoxService,
              // private el: ElementRef
              ) { }

  ngOnInit(): void {
    this.messageBoxSvc.messageText$
      .pipe(
        takeUntil(this.ngUnsubscribe$)
      )
      .subscribe(m => this.message = m);
      
    // this.el.nativeElement.addEventListener('click', ()=> {
    //   this.close()
    // })
  }

  // close() {
  //   this.el.nativeElement.classList.remove('sshow')
  //   this.el.nativeElement.classList.add('hhidden')
  // }

  closeMessageBox() {
    this.message = null;
    this.messageBoxSvc.closeMessage();
  }

}
