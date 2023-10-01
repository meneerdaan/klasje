import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelkomComponent} from "./welkom.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welkom',
    pathMatch: 'full'
  },
  {
    path: 'welkom',
    component: WelkomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
