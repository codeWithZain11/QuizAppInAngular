import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-creation',
  templateUrl: './quiz-creation.component.html',
  styleUrls: ['./quiz-creation.component.css']
})
export class QuizCreationComponent {
  questions: any[] = [];

  constructor(private quizService: QuizService, private router: Router) {}

  addQuestion() {
    this.questions.push({ text: '', answer: '' });
  }

  removeQuestion(index: number) {
    if (index > -1) {
      this.questions.splice(index, 1);
    }
  }

  onSubmit() {
    this.quizService.saveQuiz(this.questions);
    this.router.navigate(['/take-quiz']);
  }
}