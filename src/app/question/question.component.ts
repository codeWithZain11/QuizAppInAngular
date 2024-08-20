import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() question: any;
  @Input() index!: number;

  addOption() {
    this.question.options.push('');
  }

  removeOption(index: number) {
    this.question.options.splice(index, 1);
  }
  @Output() remove = new EventEmitter<number>();

  removeQuestion() {
    this.remove.emit(this.index);
  }
}