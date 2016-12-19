import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {homeComponent} from '../app/home/home.component';
import {actionComponent} from '../app/action/action.component';
import {shoppingComponent} from '../app/shopping/shopping.component';
import {mineComponent} from '../app/mine/mine.component';
import {slideComponent} from '../app/component/slide/slide.component';
// import {Slide} from '../app/component/slide/slide';

@NgModule({
  declarations: [
    MyApp,
    homeComponent,
    actionComponent,
    shoppingComponent,
    mineComponent,
    slideComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    homeComponent,
    actionComponent,
    shoppingComponent,
    mineComponent,
    slideComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
