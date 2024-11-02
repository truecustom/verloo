import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WordDialogComponent } from '../word-dialog/word-dialog.component';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrl: 'content-list.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class ContentListComponent {

  readonly dialog = inject(MatDialog);

  onAdd() {
  const dialogRef = this.dialog.open(WordDialogComponent, {
      data: {name: 'name-test', animal: 'animal-test'},

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        // this.animal.set(result);
      }
    });
  }
}
