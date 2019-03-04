import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { GlobalService } from '../../api/global.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {

  name: any = "";
  short_desc: any = "";
  description: any = "";
  editorConfig: any = {};
  createRecipeLoader: any;
  userDate: any;
  userID: any;


  constructor(public modal: ModalController, public loadingController: LoadingController, public toastr: ToastController, public globalService: GlobalService, public afDataBase: AngularFireDatabase) {
    this.userID = localStorage.getItem('authID');
    this.userDate = this.globalService.getUserData();

    // CKeditor config
    this.editorConfig = {removeButtons:'Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,Blockquote,CreateDiv,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,BidiLtr,BidiRtl,Language,Anchor,Flash,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Styles,Font,FontSize,BGColor,ShowBlocks,About',toolbarGroups:[{ name: 'basicstyles', groups: [ 'basicstyles' ] },{ name: 'paragraph',   groups: [ 'list'] },{ name: 'links' },{ name: 'styles' },{ name: 'colors' }]
    }
   }

  ngOnInit() {
  }

  submitRecipe(){
    // validate all fields and also text editor
    let fieldsValid = this.validateFields();
    if(fieldsValid){
      // console.log("name", this.name);
      // console.log("short_desc", this.short_desc);
      // console.log("description", this.description);
      this.presentLoading("Submitting recipe..");

      let recipeObj = {
        'userId': this.userID,
        'userName': (this.userDate.name == undefined) ? "" : this.userDate.name,
        'title': this.name,
        'short_desc': this.short_desc,
        'description': this.description
      }

      // console.log("recipeObj", recipeObj);


      this.afDataBase.database.ref(`/userRecipes/`+this.userID).push(recipeObj).then((data) => {
        this.dismissLoader();
        this.presentToast('Recipe submitted! Thank you for your contribution.');
        // on success clear data so that user will not post again
        this.name = "";
        this.short_desc = "";
        this.description = "";

      }).catch(error => {
        this.dismissLoader();
        // console.log('error', error.message);
        this.presentToast('Facing some issue posting recipe. Please try later!');
      })
    }
  }

  validateFields(){
    if(this.name.trim() == ""){
      this.showToast();
      return false;
    } else {
      if(this.short_desc.trim() == ""){
        this.showToast();
        return false;
      } else {
        if(this.description.trim() == ""){
          this.showToast();
          return false;
        } else {
          return true;
        }
      }
    }
  }

  showToast(){
    this.presentToast('Please fill required fileds to submit!');
  }

  close(){
    this.modal.dismiss();
  }

  async presentLoading(msg) {
    this.createRecipeLoader = await this.loadingController.create({
      message: msg
    });
    await this.createRecipeLoader.present();
  }

  async dismissLoader(){
    await this.createRecipeLoader.dismiss();
  }

  async presentToast(toastMsg) {
    const toast = await this.toastr.create({
      message: toastMsg,
      duration: 3000
    });
    toast.present();
  }

}
