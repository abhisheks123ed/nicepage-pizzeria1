import { Component } from '@angular/core';
import { ItallyPizzaData } from 'src/app/shared/itallyPizzaData.';

@Component({
  selector: 'app-italy-pizza',
  templateUrl: './italy-pizza.component.html',
  styleUrls: ['./italy-pizza.component.scss']
})
export class ItalyPizzaComponent {
  cardData = ItallyPizzaData;
  
}
