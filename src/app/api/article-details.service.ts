import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleDetailsService {

  articleData: any;
  articleLang: any;

  constructor() { }

  setArticleDetails(data, language){
    this.articleData = data;
    this.articleLang = language;
  }

  getArticleData(){
    return {"data": this.articleData, "lang": this.articleLang};
  }

}
