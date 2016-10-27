import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div class="col-sm-6">
    <h1>New Meal</h1>
    <div>
      <label>Enter Meal:</label>
      <input #newDescription>
    </div>
    <div>
      <label>Enter Details:</label>
      <input #newDetails>
    </div>
    <div>
      <label>Enter Calories:</label>
      <input #newCalories>
      <button (click)="addClicked(newDescription.value, newDetails.value, newCalories.value);
          newDescription.value='';
          newDetails.value='';
          newCalories.value='';
        ">Add</button>
    </div>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(description: string, details: string, calories: number) {
   var newMealToAdd: Meal = new Meal(description, details, calories);
   this.newMealSender.emit(newMealToAdd);
  }
}
