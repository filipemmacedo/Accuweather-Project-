import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { NowComponent } from './children/now/now.component';
import { HourlyComponent } from './children/hourly/hourly.component';
import { DailyComponent } from './children/daily/daily.component';
import { SettingsComponent } from './settings/settings.component';
import { PodcastsComponent } from './podcasts/podcasts.component';
import { VideosComponent } from './videos/videos.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'detail',
    component: DetailComponent,
    children: [
      {
        path: 'now',
        component: NowComponent,
      },
      {
        path: 'hourly',
        component: HourlyComponent,
      },
      {
        path: 'daily',
        component: DailyComponent,
      },
    ],
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'podcasts',
    component: PodcastsComponent,
  },
  {
    path: 'videos',
    component: VideosComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
