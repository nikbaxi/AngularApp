import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FollowersService } from '../services/followers.service';

@Component({
  selector: 'app-followers-details',
  templateUrl: './followers-details.component.html',
  styleUrls: ['./followers-details.component.css']
})
export class FollowersDetailsComponent implements OnInit {
  followers: any[];
  abc = 'https://api.github.com/users/mosh-hamedani/followers';

  private productJson = 'assets/followers.json';

  // to get the json details from web
  // constructor(http: Http) {
  //   http.get('https://api.github.com/users/mosh-hamedani/followers').subscribe(
  //     res => {
  //       this.followers = res.json();
  //       console.log(this.followers);
  //     });
  // }

  // to get the json details from the json file
  // constructor(http: Http) {
  //   http.get(this.productJson)
  //     .subscribe(
  //       Response => {
  //         this.followers = Response.json();
  //         console.log('response: ' + Response );
  //       }
  //     );
  // }

  constructor(private service: FollowersService)  {

  }


  ngOnInit() {
    this.service.getRes()
      .subscribe(res => {
        this.followers = res.json();
        console.log(res.json());
      });
  }

  deleteFollower(follower) {
    console.log('post deleted:' + follower);
    const index = this.followers.indexOf(follower);
    console.log(index);
    this.followers.splice(index, 1);
  }

  updateFollower(follower) {

  }

  addFollower(addFollower) {
    console.log(addFollower);
    console.log(addFollower.value);
    console.log(addFollower.id);
    this.followers.splice(0, 0, addFollower.value);
    console.log(this.followers.indexOf[addFollower.value]);
  }

}
