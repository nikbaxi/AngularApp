import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  // tslint:disable-next-line:no-input-rename
  @Input('title') title: string;
  isExpanded = true;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
