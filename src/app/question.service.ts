import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  // private billieQuizSvcUrl = 'billiequizwebapp.azurewebsites.net/BillieQuiz';
  private billieQuizSvcUrl = 'api/questions';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'allication/json' })
  }
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
    
  private log(message: string) {
    this.messageService.add('HeroService', message);
  }
  
  getQuestion(id: number): Observable<Question> {
    const url = `${this.billieQuizSvcUrl}/${id}`;
    return this.http.get<Question>(url).pipe(
      tap(_ => this.log(`fetched question id=${id}`)),
      catchError(this.handleError<Question>(`getQuestion id=${id}`))
    );
  }
  

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.billieQuizSvcUrl}`)
      .pipe(
        tap(_ => this.log('NewGetQuestions')),
        catchError(this.handleError<Question[]>('getQuestions'))
      );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`Failed: ${operation} failed: ${error.messsage}`);
      return of(result as T);
    };
  }  
}
