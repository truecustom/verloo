import { afterNextRender, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { restoreWords } from './states/word.actions';
import { Store } from '@ngrx/store';
import { selectWordList } from './states/word.selectors';
import { constants } from './constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'verloo';

  constructor(private store: Store) {
    afterNextRender(() => {
      this.store.dispatch(restoreWords());
      this.store.select(selectWordList).subscribe(list => {
        localStorage.setItem(constants.wordListStorageKey, JSON.stringify(list));
      });
    })
  }
}
