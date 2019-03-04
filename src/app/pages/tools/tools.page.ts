import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.page.html',
  styleUrls: ['./tools.page.scss'],
})
export class ToolsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  openPage(page){
    this.router.navigateByUrl(page);
  }

}
