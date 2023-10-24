import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IHero } from '../Interface/ihero';
import { HeroService } from '../hero.service';


import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Top Heroes</h2>
    <div class="heroes-menu">
      <a *ngFor="let hero of heroes" routerLink="/detail/{{ hero.id }}">
        {{ hero.name }}
      </a>
    </div>
  `,
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: IHero[] = [];

 
  ngOnInitHasRun:boolean = false; 
  /**
   *
   */
  constructor(
    private heroService: HeroService,
    
  ) {}

  ngOnInit(): void {
    
      this.getHeroes();
  }

  //return 5 random heroes
  getHeroes(): void {
    this.heroService.getRandomHeroes().subscribe((h) => (this.heroes = h));
  }
}
