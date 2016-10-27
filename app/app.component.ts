import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <div *ngFor="let currentMeal of meals">
      <h3>{{ currentMeal.description }}</h3>
      <button (click)="showDetails(currentMeal)">Edit</button>
    </div>
    <h1>Edit Meal</h1>
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
  public meals: Meal[] = [
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

export class Meal {
  public done: boolean = false;
  constructor(public description: string, public id: number) {   }
}
