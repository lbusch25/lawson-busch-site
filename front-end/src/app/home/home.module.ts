import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomePageComponent }
  // { path: '', redirectTo: '/home/home-page', pathMatch: 'full' }
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModule {}
