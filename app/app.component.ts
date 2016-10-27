import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <h3 *ngFor="let currentMeal of meals">{{ currentMeal.food }}</h3>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[] = [
      new Meal("Burrito", 560),
      new Meal("Slice of Pizza", 250),
      new Meal("Pasta", 400)
  ];
}

export class Meal {
  public done: boolean = false;
  constructor(public food: string, public calories: number) {   }
}
