import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeroesComponent,MessagesComponent],
  template: `
  <h1>{{title}}</h1>
    <app-heroes></app-heroes>
    <app-messages></app-messages>
    
  `,
  styles: [],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
