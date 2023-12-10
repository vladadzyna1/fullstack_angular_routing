import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <a routerLinkActive="active" 
      routerLink="/">HOME</a> |

    <a routerLinkActive="active" 
       routerLink="/list">List</a> |

    <a routerLinkActive="active" 
      routerLink="/add">Add</a> 

    
  </div>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
