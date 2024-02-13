import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  username: string = "";
  title = 'get-git-repo';
  data : any

  SearchHandler(username: string){
    this.username = username;
  }
  
  constructor() {
  }

  
}
