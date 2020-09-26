import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class InMemoryQuestionDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const questions = [
      { id: 1, questionId: "ABC123", questionText: "What is Billie's favourite colour?", answerArray: ["Red", "Blue", "Green"] },
      { id: 2, questionId: "DEF456", questionText: "What is her favourite number?", answerArray: ["2", "4"] },
      { id: 3, questionId: "GHI789", questionText: "Who is her number one fan?", answerArray: ["Lily", "Bob", "Alice"] }
    ];
    return {questions};
  }

  genId(questions: Question[]): number {
    return questions.length > 0 ? Math.max(...questions.map(question => question.id)) + 1 : 1;
  }

}
