import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IHero } from '../Interface/ihero';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div *ngIf="hero">
      <h2>{{ hero.name | uppercase }} Details</h2>
      <div><span>id: </span>{{ hero.id }}</div>
      <div>
        <label for="hero-name">Hero name: </label>
        <input id="hero-name" [(ngModel)]="hero.name" placeholder="name" />
      </div>
      <button type="button" (click)="goBack()">go back</button>
    </div>
  `,
  styles: [
    `
      /* HeroDetailComponent's private CSS styles */
      label {
        color: #435960;
        font-weight: bold;
      }
      input {
        font-size: 1em;
        padding: 0.5rem;
      }
      button {
        margin-top: 20px;
        background-color: #eee;
        padding: 1rem;
        border-radius: 4px;
        font-size: 1rem;
      }
      button:hover {
        background-color: #cfd8dc;
      }
      button:disabled {
        background-color: #eee;
        color: #ccc;
        cursor: auto;
      }
    `,
  ],
})
export class HeroDetailComponent {
  @Input() hero?: IHero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  goBack(): void {
    this.location.back();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }
}

/**The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. This component is interested in the route's parameters extracted from the URL. The "id" parameter is the id of the hero to display.

The HeroService gets hero data from the remote server and this component uses it to get the hero-to-display.

The location is an Angular service for interacting with the browser. This service lets you navigate back to the previous view. */

/**The route.snapshot is a static image of the route information shortly after the component was created.

The paramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the hero to fetch.

Route parameters are always strings. The JavaScript Number function converts the string to a number, which is what a hero id should be.

The browser refreshes and the application crashes with a compiler error. HeroService doesn't have a getHero() method. Add it now. */
