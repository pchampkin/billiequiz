import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/question';
import { QuestionService } from 'src/app/question.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question: Question;
  questions: Question[];

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getQuestion();
    this.getQuestions();
  }

  getQuestion(): void {
    var num = Math.ceil(Math.random() * 3);
    this.questionService.getQuestion(num).subscribe(question => this.question = question)
  }

  getQuestions(): void {
    this.questionService.getQuestions().subscribe(questions => this.questions = questions)
  }

  checkAnswer(answerIdx: number) {
    alert(`Answer ${answerIdx} is wrong!`);
  }

}
