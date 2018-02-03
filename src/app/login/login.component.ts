import {Component} from '@angular/core';
import User from '../_models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  readonly minPasswordLength = 6;

  user: User = new User();
  isLoading = false;

  onLogin() {
    this.isLoading = true;
    console.log(this.user.email + ' ' + this.user.password);
  }
}
