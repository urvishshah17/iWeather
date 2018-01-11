import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RedditService} from '../../app/services/reddit.services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private redditService:RedditService) {

  }
  ngOnInit(){
    this.getPosts('sports',5);
  }
  getPosts(category, limit){
    this.redditService.getPosts(category,limit).subscribers(response => {
      console.log(response);
    });
  }

}
