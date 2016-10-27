import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <h1>New Meal</h1>
  <div>
    <label>Enter Meal:</label>
    <input #newDescription>
  </div>
  <div>
    <label>Enter ID:</label>
    <input #newId>
    <button (click)="addClicked(newDescription.value, newId.value);
        newDescription.value='';
        newId.value='';
      ">Add</button>
  </div>
  `
})

export class NewMealComponent {
  addClicked(description: string, id: number) {
   var newMealToAdd: Meal = new Meal(description, id);
   this.newMealSender.emit(newMealToAdd);
  }
}
