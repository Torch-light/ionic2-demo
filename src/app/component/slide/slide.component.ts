import  {Component,ViewChild,Input} from '@angular/core';
import {Slides} from 'ionic-angular';
import {Slide} from './slide'
@Component({
	selector:'<my-slide></my-slide>',
	templateUrl:'./slide.html'
})

export class slideComponent{
	@ViewChild('sliders') sliders:Slides;
	//别名
	//@Input('sliderOptions')  setSliderOption :Object;
	//外部使用
	@Input() slide:Slide;
	@Input() datas:Object;
}

