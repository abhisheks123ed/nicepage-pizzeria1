import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { FedericoFelliniComponent } from './components/federico-fellini/federico-fellini.component';
import { CardsComponent } from './components/cards/cards.component';
import { JohnPizzeriaComponent } from './components/john-pizzeria/john-pizzeria.component';

import { ItalyPizzaComponent } from './components/italy-pizza/italy-pizza.component';
import { TasteOfItalyComponent } from './components/taste-of-italy/taste-of-italy.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
    FedericoFelliniComponent,
    CardsComponent,
    JohnPizzeriaComponent,
    ItalyPizzaComponent,
    TasteOfItalyComponent,
    PricingComponent,
    ContactComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
