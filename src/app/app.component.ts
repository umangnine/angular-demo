import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ['Angular4', 'Reacts', 'Underscore'];
  name = 'Darshan';
  day = new Date(1993,10,28);
  arr = [3, 7, 8, 5, 6, 1, 2];
  newItem = '';
  pushItem = function() {
    if (this.newItem !== '') {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  };
  removeItem = function(index) {
    this.items.splice(index, 1);
  };
}
