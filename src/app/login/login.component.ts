import {Component} from '@angular/core';
import User from '../_models/user.model';
import {Router} from '@angular/router';
import {AuthService} from '../_shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  readonly minPasswordLength = 6;

  user: User = new User();
  isLoading = false;

  constructor(private _authService: AuthService, private _router: Router) {
  }

  onLogin() {
    this.isLoading = true;
    this._authService
      .logIn(this.user)
      .then(response => {
        this.isLoading = false;
        console.log(response);
        this._router.navigateByUrl('decks');
      }).catch(e => console.log(e));
  }
}
