import { Component } from '@angular/core';

@Component({
  selector: 'after-login-header',
  templateUrl:'./after-login-header.html' ,
  styles: [`
    #header {
      display: block;
      border-bottom: 2px solid #000;
      min-width: 800px;
      min-height: 60px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      padding: 0 10px;
    }
  `]
})
export class AfterLoginHeaderComponent {
  
}