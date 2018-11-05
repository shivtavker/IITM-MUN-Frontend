import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommitteeComponent } from './pages/committee/committee.component';
import { Committee1Component } from './pages/committee1/committee1.component';
import { Committee2Component } from './pages/committee2/committee2.component';
import { Committee3Component } from './pages/committee3/committee3.component';
import { Committee4Component } from './pages/committee4/committee4.component';
import { Committee5Component } from './pages/committee5/committee5.component';
import { ApplicationComponent } from './pages/application/application.component';
import { TeamComponent } from './pages/team/team.component';

/*const appRoutes:Routes=[
    
];*/

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImageViewerComponent,
    HomeComponent,
    FooterComponent,
    CommitteeComponent,
    Committee1Component,
    Committee2Component,
    Committee3Component,
    Committee4Component,
    Committee5Component,
    ApplicationComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'committee',
        component: CommitteeComponent,
      },
      {
        path: 'committee1',
        component: Committee1Component,
      },
      {
        path: 'committee2',
        component: Committee2Component,
      },
      {
        path: 'committee3',
        component: Committee3Component,
      },
      {
        path: 'committee4',
        component: Committee4Component,
      },
      {
        path: 'committee5',
        component: Committee5Component,
      },
      {
        path: 'application',
        component: ApplicationComponent,
      },
      {
        path: 'team',
        component: TeamComponent,
      },
      {
        path: '**',
        component: HomeComponent,
      },
    ]),

    Ng4LoadingSpinnerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CommonModule],
})
export class AppModule {}
