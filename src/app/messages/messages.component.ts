import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="messageService.messages.length">
      <h2>Messages</h2>
      <button type="button" class="clear" (click)="messageService.clear()">
        Clear messages
      </button>
      <div *ngFor="let message of messageService.messages">{{ message }}</div>
    </div>
  `,
  styles: [
    `
      /* MessagesComponent's private CSS styles */
      h2 {
        color: #a80000;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: lighter;
      }

      .clear {
        color: #333;
        background-color: #eee;
        margin-bottom: 12px;
        padding: 1rem;
        border-radius: 4px;
        font-size: 1rem;
      }
      .clear:hover {
        color: white;
        background-color: #42545c;
      }
    `,
  ],
})
export class MessagesComponent {
  //The messageService property must be public because you're going to bind to it in the template.
  //Angular only binds to public component properties.
  constructor(public messageService: MessageService) {}
}
