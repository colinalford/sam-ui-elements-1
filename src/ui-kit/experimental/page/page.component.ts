import { Component, Input, Injectable, OnInit } from '@angular/core';

@Injectable()
export class SamPageService{
  sidebar = false;
}

@Component({
  selector: 'sam-page',
  templateUrl: 'page.template.html',
  providers: [SamPageService]
})
export class SamPageComponent{
  @Input() public title: string;
  @Input() public intro: string;
  constructor(public pageService: SamPageService){}
}

@Component({
  selector: 'sam-page-sidebar',
  template: `
    <div class="page-sidebar">
      <ng-content></ng-content>
    </div>
  `
})
export class SamPageSidebarComponent implements OnInit{
  constructor(private pageService: SamPageService){}
  ngOnInit(){
    this.pageService.sidebar = true;  
  }
}