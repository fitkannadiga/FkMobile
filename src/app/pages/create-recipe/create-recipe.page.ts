import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.page.html',
  styleUrls: ['./create-recipe.page.scss'],
})
export class CreateRecipePage implements OnInit {

  name: any;
  short_desc: any;
  description: any;
  editorConfig: any = {};

  constructor(public modal: ModalController) {
    this.editorConfig = {removeButtons:'Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,Blockquote,CreateDiv,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,BidiLtr,BidiRtl,Language,Anchor,Flash,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Styles,Font,FontSize,BGColor,ShowBlocks,About',toolbarGroups:[{ name: 'basicstyles', groups: [ 'basicstyles' ] },{ name: 'paragraph',   groups: [ 'list'] },{ name: 'links' },{ name: 'styles' },{ name: 'colors' }]
    }
   }

  ngOnInit() {
  }

  submitRecipe(){
    // validate all fields and also text editor

  }

}
