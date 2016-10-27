import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="col-sm-6">
    <select (change)="onChange($event.target.value)">
      <option value="over500" selected="selected">Over 500 Calories</option>
      <option value="under500">Under 500 Calories</option>
      <option selected value="all">Show All</option>
    </select>
    <div *ngFor="let currentMeal of childMealList | calories:selectedCalories">


      <h3>Meal: {{ currentMeal.description }}</h3>
      <h4>Details: {{ currentMeal.details }}</h4>
      <h4>Calories: {{ currentMeal.calories }}</h4>
      <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
    </div>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  public selectedCalories: string = "all";

  onChange(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
    console.log(this.selectedCalories);
  }
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
