import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-help-home',
  templateUrl: './help-home.component.html',
  styleUrl: 'help-home.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MarkdownModule,
  ],
})
export class HelpHomeComponent {}
