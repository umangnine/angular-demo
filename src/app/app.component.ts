import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form;
  ngOnInit() {
      this.form = new FormGroup({
          firstname: new FormControl('darshan'),
          lastname: new FormControl(''),
          languages: new FormControl(''),
      });
  }
  onSubmit = function (user) {
      console.log(user);
  };
}
