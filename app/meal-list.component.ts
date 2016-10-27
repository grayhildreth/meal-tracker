import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all">Show All</option>
    <option value="under500">Under 500 Calories</option>
    <option value="over500" selected="selected">Over 500 Calories</option>
  </select>

  <div *ngFor="let currentMeal of childMealList">
    <h3>Meal: {{ currentMeal.description }}</h3>
    <h4>Details: {{ currentMeal.details }}</h4>
    <h4>Calories: {{ currentMeal.calories }}</h4>
    <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
