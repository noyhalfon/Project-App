import { ClubsListComponent } from './../pages/clubs/clubs-list/clubs.list.component';
import { UserService } from './../services/user.service';
import { ClubDetailsComponent } from './../pages/clubs/club-details/club.details.component';
import { ClubService } from './../services/club.service';
import { DashboardComponent } from './../pages/dashboard/dashboard.component';
import { SigningService } from './../services/signing.service';
import { LoginComponent } from './../pages/login/login.component';
import { SignupComponent } from './../pages/signup/signup.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ClubDetailsComponent,
    ClubsListComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ClubDetailsComponent,
    ClubsListComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SigningService,
    UserService,    
    ClubService
    ]
})
export class AppModule {}
