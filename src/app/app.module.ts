import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { OffersComponent } from './offers/offers.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { OurFacilityComponent } from './our-facility/our-facility.component';
import { MainComponent } from './main/main.component';
import { ArticlesComponent } from './articles/articles.component';
import { FeaturedArticlesComponent } from './featured-articles/featured-articles.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    CourseInfoComponent,
    OffersComponent,
    SuccessStoriesComponent,
    NewsComponent,
    FooterComponent,
    OurFacilityComponent,
    MainComponent,
    ArticlesComponent,
    FeaturedArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
