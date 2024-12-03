import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { MainComponent } from './main/main.component';
import { ArticlesComponent } from './articles/articles.component';
import { FeaturedArticlesComponent } from './featured-articles/featured-articles.component';

const routes: Routes = [
  {path: '', component: MainComponent}, {
    path: 'news', component: NewsComponent
  }, 
  {
    path: 'article/:id',
    component: ArticlesComponent,
  },
  {path:'featuredArticle/:id', component: FeaturedArticlesComponent },
  {
    path: '**',
    redirectTo: '',
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
