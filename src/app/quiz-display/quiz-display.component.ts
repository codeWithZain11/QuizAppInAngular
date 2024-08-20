import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../services/quiz.service'; 

@Component({
  selector: 'app-quiz-display',
  templateUrl: './quiz-display.component.html',
  styleUrls: ['./quiz-display.component.css']
})
export class QuizDisplayComponent implements OnInit {
  quiz: any[] = [];
  userAnswers: string[] = [];

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.quiz = this.quizService.getQuizQuestions();

    if (this.quiz) {
      this.userAnswers = new Array(this.quiz.length).fill('');
    }
  }

  onSubmit(): void {
    this.quizService.evaluateQuiz(this.userAnswers);
    this.router.navigate(['/review-quiz']);
  }
}