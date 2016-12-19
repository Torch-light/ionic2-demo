import {Component} from '@angular/core';
// import {Tab1} from './table.component';
 import {homeComponent} from './home/home.component';
 import {actionComponent} from './action/action.component';
 import {shoppingComponent} from './shopping/shopping.component';
 import {mineComponent} from './mine/mine.component';

@Component({
  // templateUrl:'home.html'
  template: `
  <ion-tabs>
    <ion-tab tabIcon="water" tabTitle="首页" [root]="home"></ion-tab>
    <ion-tab tabIcon="leaf" tabTitle="点餐" [root]="action"></ion-tab>
    <ion-tab tabIcon="flame" tabTitle="购物车" [root]="shopping"></ion-tab>
    <ion-tab tabIcon="magnet" tabTitle="我的" [root]="mine"></ion-tab>
  </ion-tabs>`
  
})

export class MyApp{
  home: any;
  action: any;
  shopping: any;
  mine: any;

  constructor() {
    this.home=homeComponent;
    this.action=actionComponent;
    this.shopping=shoppingComponent;
    this.mine=mineComponent;
  }
}