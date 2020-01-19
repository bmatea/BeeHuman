import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AdComponent } from './ad/ad.component';
import { ListViewComponent } from './list-view/list-view.component';
import { VoluneeringComponent } from './voluneering/voluneering.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NewAdFormComponent } from './new-ad-form/new-ad-form.component';
import { PendingComponent } from './pending/pending.component';
import { DonationsComponent } from './donations/donations.component';
import { BlogComponent } from './blog/blog.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    LoginComponent,
    DashboardComponent,
    NavigationBarComponent,
    AdComponent,
    ListViewComponent,
    VoluneeringComponent,
    NewAdFormComponent,
    PendingComponent,
    DonationsComponent,
    BlogComponent,
    BlogCardComponent,
    BlogDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewAdFormComponent]
})
export class AppModule { }
