import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { DashboradComponent } from './dashborad/dashborad.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboradComponent},
  { path: 'detail/:id', component: HeroDetailComponent }, 
  { path: 'heroes', component: HeroesComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
