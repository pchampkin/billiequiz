import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from '../question.service';
import { Question } from '../question';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  questionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private questionService: QuestionService,
    ) { 
    this.questionForm = this.formBuilder.group({
      questionText: ['', [Validators.required]],
      correctAnswer: ['', [Validators.required]],
      wrongAnswer1: ['', [Validators.required]],
      wrongAnswer2: ['', [Validators.required]],
      wrongAnswer3: ['', [Validators.required]]
    });
  }

  get questionText() {
    return this.questionForm.get('questionText');
  }
  get correctAnswer() {
    return this.questionForm.get('correctAnswer');
  }
  get wrongAnswer1() {
    return this.questionForm.get('wrongAnswer1');
  }
  get wrongAnswer2() {
    return this.questionForm.get('wrongAnswer2');
  }
  get wrongAnswer3() {
    return this.questionForm.get('wrongAnswer3');
  }

  onSubmit() {
    let q : any = {
      questionText: this.questionText.value,
      answerArray: [this.correctAnswer.value, 
        this.wrongAnswer1.value,
        this.wrongAnswer2.value,
        this.wrongAnswer3.value] };

    this.questionService.addQuestion(q, 0);
    console.log(this.questionForm.value);
  }

}
