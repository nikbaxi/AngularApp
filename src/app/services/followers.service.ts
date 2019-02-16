import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class FollowersService {
    URL = 'https://api.github.com/users/mosh-hamedani/followers';
    jsonURL = 'assets/followers.json';

    constructor(private http: Http) {

    }

    getRes() {
        return this.http.get(this.jsonURL);
    }

    create(followers) {
        return this.http.patch(this.jsonURL, JSON.stringify(followers.value));
    }


}
