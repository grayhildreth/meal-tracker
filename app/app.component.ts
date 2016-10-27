import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <meal-list
        [childMealList]="masterMealList"
        (clickSender)="showDetails($event)"
      ></meal-list>
    <div *ngIf="selectedMeal">
    <div>
      <label>Enter Meal Description:</label>
      <input [(ngModel)]="selectedMeal.description">
    </div>
    <div>
      <label>Enter Meal ID:</label>
      <input [(ngModel)]="selectedMeal.id">
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
      new Meal("Burrito", 0),
      new Meal("Pizza", 1),
      new Meal("Pho", 2),
  ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
    finishedEditing() {
      this.selectedMeal = null;
    }
  }
