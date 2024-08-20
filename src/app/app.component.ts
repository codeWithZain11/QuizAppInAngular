import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { QuizCreationComponent } from './quiz-creation/quiz-creation.component';
import { QuizDisplayComponent } from './quiz-display/quiz-display.component';
import { QuizReviewComponent } from './quiz-review/quiz-review.component';
import { QuizService } from './services/quiz.service';

const routes: Routes = [
  { path: 'create-quiz', component: QuizCreationComponent },
  { path: 'take-quiz', component: QuizDisplayComponent },
  { path: 'review-quiz', component: QuizReviewComponent },
  { path: '', redirectTo: '/create-quiz', pathMatch: 'full' }  // Redirect to create quiz by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynamic Quiz Application';


}