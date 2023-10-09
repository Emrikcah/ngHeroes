import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IHero} from '../Interface/ihero';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule,FormsModule],
  template: `
    <div *ngIf="hero">
      <h2>{{ hero.name | uppercase }} Details</h2>
      <div><span>id: </span>{{ hero.id }}</div>
      <div>
        <label for="hero-name">Hero name: </label>
        <input id="hero-name" [(ngModel)]="hero.name" placeholder="name" />
      </div>
    </div>
  `,
  styles: [],
})
export class HeroDetailComponent {
  @Input() hero?: IHero;
}
