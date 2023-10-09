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

  //return mock heroes
  getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
