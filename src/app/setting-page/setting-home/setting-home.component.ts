import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-setting-home',
  templateUrl: './setting-home.component.html',
  standalone: true,
  styleUrl: 'setting-home.component.scss',
  imports: [
    CommonModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatButtonModule,
    MatSliderModule,
  ],
})
export class SettingHomeComponent {}
