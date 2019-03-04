import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { CommonService } from '../../api/common.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  information: any = [];
  lang: boolean =  true;
  presentLang: string = "English";
  langIdentifier: string = 'en';
  finalFaqObject: any = [];

  constructor(public afDataBase: AngularFireDatabase, public commonService: CommonService, private alertCtrl: AlertController) {
    this.commonService.getFaq().then((data)=> {
      // console.log("faq data: ", data);
      this.information = data;
      this.changeQuestions('en');
    });
  }

  ngOnInit() {
  }
 
  toggleSection(i) {
    // Close all the other opened accordion and then open the selected
    for(var i_key in this.finalFaqObject){
      if(this.finalFaqObject[i_key].open){
        this.finalFaqObject[i_key].open = !this.finalFaqObject[i_key].open;
      }
    }
    this.finalFaqObject[i].open = !this.finalFaqObject[i].open;
  }

  async presentLangSelector(){
    const alert = await this.alertCtrl.create({
      header: 'Select Language',
      inputs : [
      {
          type:'radio',
          label:'English',
          value:'english',
          checked: this.lang
      },
      {
          type:'radio',
          label:'ಕನ್ನಡ',
          value:'kannada',
          checked: !this.lang
      }],
      buttons : [
      {
          text: "Cancel",
          handler: data => {
            // Do nothing
          // console.log("cancel clicked");
          }
      },
      {
          text: "Ok",
          handler: data => {
            // console.log("lang data", data);
            if(data == "kannada"){
              this.lang = false;
              this.presentLang = "ಕನ್ನಡ";
            } else {
              this.lang = true;
              this.presentLang = "English";
            }
            this.changeQuestions(this.langIdentifier);
          // console.log("lang data", this.langIdentifier);
          }
      }]});
      return await alert.present();
  }

  changeQuestions(s_lang){
    this.finalFaqObject = [];
    for(var l_key in this.information){
      if(this.information[l_key].lang == s_lang){
        this.finalFaqObject.push(this.information[l_key]);
      }
    }
  }

  

}
