import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
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
export class HelpHomeComponent {
  // @HostBinding('class') protected readonly class = 'contents'; // Makes component host as if it was not there, can offer less css headaches. Assumes .contents{display:contents} css class exits
  // constructor() {}
}
