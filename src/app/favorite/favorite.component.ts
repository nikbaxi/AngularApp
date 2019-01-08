import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styles: [
    `
    .fa-star{
      color: green;
    }

    .fa-star{
      background: black;
    }

    `
  ],
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class FavoriteComponent {

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit(this.isSelected);
  }
}
