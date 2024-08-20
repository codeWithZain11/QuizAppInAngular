import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule

import { AppComponent } from './app.component';
import { QuizCreationComponent } from './quiz-creation/quiz-creation.component';
import { QuizDisplayComponent } from './quiz-display/quiz-display.component';
import { QuestionComponent } from './question/question.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { QuizReviewComponent } from './quiz-review/quiz-review.component';  // Ensure your component is declared
import { HighlightDirective } from './highlight.directive';
import { QuizService } from './services/quiz.service';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BackgroundComponent } from './background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizCreationComponent,
    QuizDisplayComponent,
    QuestionComponent,
    QuizResultComponent,
    QuizReviewComponent,  // Declare your component here
    HighlightDirective, BackgroundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here
    CommonModule,
    AppRoutingModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }