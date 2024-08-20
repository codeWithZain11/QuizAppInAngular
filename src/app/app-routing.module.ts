import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizCreationComponent } from './quiz-creation/quiz-creation.component';
import { QuizDisplayComponent } from './quiz-display/quiz-display.component';
import { QuizReviewComponent } from './quiz-review/quiz-review.component';
import { BackgroundComponent } from './background/background.component';

const routes: Routes = [
  { path: 'create-quiz', component: QuizCreationComponent },
  { path: 'take-quiz', component: QuizDisplayComponent },
  { path: 'review-quiz', component: QuizReviewComponent },
  { path: 'background', component: BackgroundComponent },
  { path: '', redirectTo: '/background', pathMatch: 'full' }  // Redirect to create-quiz by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }