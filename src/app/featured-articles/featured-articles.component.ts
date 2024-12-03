import { Component } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { featuredArticles, IArticle } from '../../articles';
import { fullFeaturedArticles, IFullArticle } from '../../fullArticles';

@Component({
  selector: 'app-featured-articles',
  templateUrl: './featured-articles.component.html',
  styleUrl: './featured-articles.component.css'
})
export class FeaturedArticlesComponent {
  featuredArticle:IArticle={} as IArticle;
  fullFeaturedArticle: IFullArticle =  {} as IFullArticle;
  index = 0;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.index = params['id'];
      this.featuredArticle = featuredArticles[this.index];
      this.fullFeaturedArticle= fullFeaturedArticles[this.index]
    });
  }

}
