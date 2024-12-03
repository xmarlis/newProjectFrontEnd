import { Component } from '@angular/core';
import { generalArticles, IArticle } from '../../articles';
import { ActivatedRoute, Params } from '@angular/router';
import { fullGeneralArticles, IFullArticle } from '../../fullArticles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  article:IArticle={} as IArticle;
  fullArticle: IFullArticle={} as IFullArticle;
  index = 0;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.index = params['id'];
      this.article = generalArticles[this.index];
      this.fullArticle=fullGeneralArticles[this.index]
    });
  }

}
