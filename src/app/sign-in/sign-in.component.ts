import {Component} from '@angular/core';
import User from '../_models/user.model';
import {Router} from '@angular/router';
import {AuthService} from '../_shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})
export class SignInComponent {
  readonly minPasswordLength = 6;
  user: User = new User();
  isLoading = false;
  repeat: string;

  constructor(private _authService: AuthService, private _router: Router) {
  }

  onSignIn() {
    this.isLoading = true;
    this._authService
      .signIn(this.user)
      .then(response => {
        this.isLoading = false;
        console.log(response);
        this._router.navigateByUrl('decks');
      })
      .catch();
  }

  passwordMatch() {
    return this.user.password === this.repeat;
  }
}
