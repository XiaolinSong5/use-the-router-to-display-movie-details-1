import {Component} from '@angular/core';
import {MovieItemComponent} from './movie-item/movie-item.component';
import {HighlightDirective} from './highlight.directive';
import {RouterModule} from "@angular/router";


@Component({
  selector: 'app-root',
  standalone: true,

  templateUrl: 'app.component.html',
  imports: [
    MovieItemComponent, HighlightDirective, RouterModule
  ]
})
export class AppComponent {
  title = 'homes';

}
