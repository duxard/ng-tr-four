import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-tr-four';

  updatePosts(event) {
    console.log('Parent comp');
    console.log(event);
  }
}
