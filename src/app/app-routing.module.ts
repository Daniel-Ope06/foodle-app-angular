import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  {path:'home', title: 'Foodle App', component: HomeComponent},
  {path:'menu', title: 'Foodle Menu', component: MenuComponent},
  {path:'about', title: 'Foodle About', component: AboutComponent},
  {path:'services', title: 'Foodle Services', component: ServicesComponent},
  {path:'team', title: 'Foodle Team', component: TeamComponent},
  {path:'contact', title: 'Foodle Contact', component: ContactComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
];

RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
