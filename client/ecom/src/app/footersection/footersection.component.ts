import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footersection',
  templateUrl: './footersection.component.html',
  styleUrls: ['./footersection.component.scss'],
})
export class FootersectionComponent {
  icon = faCoffee;
}
