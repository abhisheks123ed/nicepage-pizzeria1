import { Component } from '@angular/core';
import { CardData } from 'src/app/shared/cardData';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  cardDatas = CardData
}
