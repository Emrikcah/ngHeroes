import { Injectable } from '@angular/core';
import { IHero } from './Interface/ihero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  //Angular injects the singleton MessageService into that property when it creates the HeroService.
  constructor(private messageService: MessageService) {}

  //return all mock heroes
  getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  //return a single hero
  getHero(id: number): Observable<IHero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  //return 5 random heroes
  getRandomHeroes(): Observable<IHero[]>{
    //create a copy of the original array then randomize the array using sort()
    const randomHeroes = [...HEROES].sort(() => Math.random() - 0.5);
  
     // Take the first 5 elements from the random array
     const selectedHeroes = randomHeroes.slice(0, 5);

     this.messageService.add('HeroService: fetched 5 random heroes');
     return of(selectedHeroes);
  }

  
}
