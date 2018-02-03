import {Component} from '@angular/core';
import {AuthService} from '../_shared/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent {
  email: string;

  constructor(private authService: AuthService) {
  }


  isLogged(): boolean {
    return this.authService.isLogged();
  }

  getEmail() {
    if (this.isLogged()) {
      this.email = this.authService.decodeEmail();
    }
  }
}
