import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
      <h1>Edit Meal</h1>
      <div>
        <label>Edit Meal:</label>
        <input [(ngModel)]="childSelectedMeal.description">
      </div>
      <div>
        <label>Edit Meal Details:</label>
        <input [(ngModel)]="childSelectedMeal.details">
      </div>
      <div>
        <label>Edit calories:</label>
        <input [(ngModel)]="childSelectedMeal.calories">
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
