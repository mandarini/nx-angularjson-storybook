import { Component, Input } from '@angular/core';

@Component({
  selector: 'testng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() name = 'katerina';
  @Input() age = 33;
  @Input() happy = true;
}
