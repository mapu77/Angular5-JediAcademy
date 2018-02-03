import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DecksComponent} from './decks.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: DecksComponent}])
  ],
  declarations: [DecksComponent]
})
export class DecksModule {
}
