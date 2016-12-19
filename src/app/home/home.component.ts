import {Component,OnInit} from '@angular/core';
 // import {Slide} from '../component/slide/slide';
// import {Slide} from './slide';
@Component({
	 templateUrl:'./home.html'
})

export class homeComponent implements OnInit{
  slide={
    autoplay:5000,
    loop:true,
    pager:true,
    speend:1000,
    initialSlide:1,
  };
  ngOnInit():void{

  }
  defalutData=[{
    data:'defalut'
  },
  {
    data:'defalut1'
  },
  {
    data:'defalut5'
  },]
  //  onSlideChanged() {
  //  	debugger;
  //   // this.slider.slideTo(2, 500);
  //    let currentIndex = this.slider.getActiveIndex();
  //   console.log("Current index is", currentIndex);
  // }
}