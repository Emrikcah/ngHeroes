import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IHero } from '../Interface/ihero';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

import {HeroDetailComponent} from '../hero-detail/hero-detail.component'



@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule,HeroDetailComponent],
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        <button
          [class.selected]="hero === selectedHero"
          type="button"
          (click)="onSelect(hero)"
        >
          <span class="badge">{{ hero.id }}</span>
          <span class="name">{{ hero.name }}</span>
        </button>
      </li>
    </ul>
    <!-- app-detail is what has the hero property -->
    <app-hero-detail [hero]="selectedHero"></app-hero-detail>
    
  `,
  styles: [
    `
      /* HeroesComponent's private CSS styles */
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }

      .heroes li {
        display: flex;
      }

      .heroes button {
        flex: 1;
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #eee;
        margin: 0.5em;
        padding: 0;
        border-radius: 4px;
        display: flex;
        align-items: stretch;
        height: 1.8em;
      }

      .heroes button:hover {
        color: #2c3a41;
        background-color: #e6e6e6;
        left: 0.1em;
      }

      .heroes button:active {
        background-color: #525252;
        color: #fafafa;
      }

      .heroes button.selected {
        background-color: black;
        color: white;
      }

      .heroes button.selected:hover {
        background-color: #505050;
        color: white;
      }

      .heroes button.selected:active {
        background-color: black;
        color: white;
      }

      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #405061;
        line-height: 1em;
        margin-right: 0.8em;
        border-radius: 4px 0 0 4px;
      }

      .heroes .name {
        align-self: center;
      }
    `,
  ],
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  //properties
  heroes: IHero[] = [];
  selectedHero?: IHero;

  //methods
  onSelect(hero: IHero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

}

// While you could call getHeroes() in the constructor, that's not the best practice.

// Reserve the constructor for minimal initialization such as wiring constructor parameters to properties. The constructor shouldn't do anything. It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.

// Instead, call getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit() at an appropriate time after constructing a HeroesComponent instance.
