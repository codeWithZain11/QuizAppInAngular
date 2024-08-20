import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizQuestions: any[] = [];
  private results: any[] = [];
  private quizCompleted = false;

  // Save quiz questions when creating a quiz
  saveQuiz(questions: any[]): void {
    this.quizQuestions = questions;
    this.quizCompleted = false; // Reset the quiz completion state
  }

  // Retrieve the saved quiz questions
  getQuizQuestions(): any[] {
    return this.quizQuestions;
  }

  // Evaluate the quiz based on user-provided answers
  evaluateQuiz(userAnswers: string[]): void {
    this.results = this.quizQuestions.map((question, index) => ({
      question: question.text,
      correct: question.answer === userAnswers[index],
      userAnswer: userAnswers[index]
    }));
    this.quizCompleted = true;
  }

  // Retrieve the evaluation results
  getResults(): any[] {
    return this.results;
  }

  isQuizCompleted(): boolean {
    return this.quizCompleted;
  }

}