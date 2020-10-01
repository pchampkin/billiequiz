import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/question';
import { QuestionService } from 'src/app/question.service';
import { AnswerComponent } from 'src/app/answers/answer/answer.component';
import { MessageBoxService } from 'src/app/message-box.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question: Question;
  answer: boolean;
  showAnswer: string;

  constructor(
    private questionService: QuestionService, 
    private messageBoxSvc: MessageBoxService) { }

  ngOnInit(): void {
    this.getQuestion();
  }

  getQuestion(): void {
    this.answer = null;
    this.questionService.getQuestion().subscribe(question => this.question = question);
  }

  checkAnswer(answerIdx: number) {
    this.questionService
      .checkAnswer(this.question.questionId, answerIdx)
      .subscribe(ans => {
        this.answer = ans; 
        console.log(`got answer ${ans}`);
        this.messageBoxSvc.showMessage(`You are so ${ans}!`);
      });
  }

}
