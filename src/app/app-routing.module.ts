import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularInitialisation } from './angular-initialisation/angular-initialisation.component';
import { HlsVideoComponent } from './hls-video/hls-video.component';

const routes: Routes = [
  {path: 'angular-initialisation', component: AngularInitialisation},
  {path: '', redirectTo: '/angular-initialisation', pathMatch: 'full'},
  {path: 'hls-video', component: HlsVideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
