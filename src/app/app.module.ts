import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DailyComponent } from './children/daily/daily.component';
import { HourlyComponent } from './children/hourly/hourly.component';
import { NowComponent } from './children/now/now.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { CurrentComponent } from './current/current.component';
import { SublinksComponent } from './sublinks/sublinks.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SettingsComponent } from './settings/settings.component';
import { ListlinksComponent } from './listlinks/listlinks.component';
import { TopstoriesComponent } from './topstories/topstories.component';
import { PodcastsComponent } from './podcasts/podcasts.component';
import { SidebarArticleComponent } from './sidebar-article/sidebar-article.component';
import { CategoriesComponent } from './categories/categories.component';
import { VideosComponent } from './videos/videos.component';
import { ListnewsComponent } from './listnews/listnews.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    HeaderComponent,
    FooterComponent,
    DailyComponent,
    HourlyComponent,
    NowComponent,
    NavbarComponent,
    SearchComponent,
    CurrentComponent,
    SublinksComponent,
    SidenavComponent,
    SettingsComponent,
    ListlinksComponent,
    TopstoriesComponent,
    PodcastsComponent,
    SidebarArticleComponent,
    CategoriesComponent,
    VideosComponent,
    ListnewsComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
