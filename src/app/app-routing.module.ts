import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListViewComponent } from './list-view/list-view.component';
import { VoluneeringComponent } from './voluneering/voluneering.component';
import { DonationsComponent } from './donations/donations.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'volunteering',
    component: VoluneeringComponent
  },
  {
    path: 'donations',
    component: DonationsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blogDetail/:id',
    component: BlogDetailComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
