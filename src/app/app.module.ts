import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ActivitiesComponent,
    ListingDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
