import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz-review',
  templateUrl: './quiz-review.component.html',
  styleUrls: ['./quiz-review.component.css']
})
export class QuizReviewComponent implements OnInit {
  results: any[] = [];
  quizCompleted = false;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.results = this.quizService.getResults();
    this.quizCompleted = this.quizService.isQuizCompleted();
  }

  reviewQuiz(): void {
    console.log('Quiz reviewed:', this.results);
  }
}