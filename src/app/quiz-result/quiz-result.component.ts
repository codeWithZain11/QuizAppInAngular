import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';  // Ensure correct import

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {
  results: any[] = [];
  quizCompleted = false;

  constructor(private quizService: QuizService) { }  // Inject the service here

  ngOnInit() {
    this.results = this.quizService.getResults();
    this.quizCompleted = this.quizService.isQuizCompleted();
  }
}