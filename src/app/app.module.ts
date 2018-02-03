import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CookieService} from 'ng2-cookies';


import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {FooterComponent} from './footer/footer.component';
import {AboutComponent} from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './_shared/services/auth.service';
import {DecksModule} from './decks/decks.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    DecksModule
  ],
  providers: [
    CookieService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
