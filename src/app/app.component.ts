import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA] 
}) 
export class AppComponent {
  title = 'desafio2';
  
}
 