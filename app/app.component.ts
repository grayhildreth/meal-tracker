import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <h3 (click)="showDetails(currentMeal)" *ngFor="let currentMeal of meals">{{ currentMeal.description }}</h3>
    <h1>Edit Meal</h1>
    <div>
      <label>Enter Meal Description:</label>
      <input [(ngModel)]="selectedMeal.description">
    </div>
    <div>
      <label>Enter Meal ID:</label>
      <input [(ngModel)]="selectedMeal.id">
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
  selectedMeal: Meal = this.meals[0];
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
}

export class Meal {
  public done: boolean = false;
  constructor(public description: string, public id: number) {   }
}
