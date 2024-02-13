import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from  '@angular/common/http';
// Import the NgxPaginationModule from 'ngx-pagination'
import { NgxPaginationModule } from 'ngx-pagination';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApiService } from './services/api.service';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubSearchComponent } from './components/github-search/github-search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntercepterService } from './loader/intercepter.service';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,
    GithubProfileComponent,
    GithubSearchComponent,
    NavbarComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    NgxSkeletonLoaderModule,
    
   
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: IntercepterService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
