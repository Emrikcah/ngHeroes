import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MessagesComponent, RouterLink],
  template: `
    <h1>{{ title }}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>
    <!-- The <router-outlet> tells the router where to display routed views. -->
    <!-- routing is setup in app.routes.ts -->
    <router-outlet></router-outlet>
    <app-messages></app-messages>
  `,
  styles: [
    `
      /* AppComponent's private CSS styles */
      h1 {
        margin-bottom: 0;
      }
      nav > a:first-child{
        margin-right: 10px;
      }

      nav a {
        padding: 1rem;
        text-decoration: none;
        margin-top: 10px;
        display: inline-block;
        background-color: #e8e8e8;
        color: #3d3d3d;
        border-radius: 4px;
      }

      nav a:hover {
        color: white;
        background-color: #42545c;
      }
      nav a:active {
        background-color: black;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
