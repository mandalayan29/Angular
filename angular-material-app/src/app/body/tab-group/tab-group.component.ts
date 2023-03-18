import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.sass']
})
export class TabGroupComponent {

  links: string[]=['First', 'Second', 'Third']


  activeLink=this.links[0];



}
