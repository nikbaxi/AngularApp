import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('likesCount') likesCount: number;
  @Input('isActive') isLiked: boolean;
  
  isSelected: boolean;
  count: number;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.count = 0;
    // tslint:disable-next-line:curly
    if this.isSelected ? this.count = 1 : this.count = 0;
    console.log(this.count);
    console.log(this.isSelected);
  }

  onHeartClicked() {
    this.isLiked = !this.isLiked;
    // tslint:disable-next-line:curly
    if this.isLiked ? this.likesCount++ : this.likesCount--;
    console.log(this.likesCount);
    console.log(this.isLiked);
  }

}
