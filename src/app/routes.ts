import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', loadChildren: './login/login.module#LoginModule'},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'sign-in', loadChildren: './sign-in/sign-in.module#SignInModule'},
  {path: 'decks', loadChildren: './decks/decks.module#DecksModule'},
  {path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule'},
  {path: '**', redirectTo: '404', pathMatch: 'full'}
];
