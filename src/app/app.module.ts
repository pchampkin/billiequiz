import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryQuestionDataService } from './in-memory-question-data.service';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule,
         MatMenuModule,
         MatIconModule,
         MatButtonModule,
         MatTableModule,
         MatDividerModule,
         MatProgressSpinnerModule,
         MatInputModule,
         MatCardModule,
         MatSlideToggleModule,
         MatSelectModule,
         MatOptionModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { QuestionComponent } from './questions/question/question.component';
import { AnswerComponent } from './answers/answer/answer.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    QuestionComponent,
    AnswerComponent,
    MessageBoxComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryQuestionDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
