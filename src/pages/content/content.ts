import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Slide } from '../tutorial/tutorial';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {

  slides: Slide[];
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public platform: Platform) {
    this.dir = platform.dir();
    translate.get(['CONTENT_SLIDE1_TITLE',
      'CONTENT_SLIDE1_DESCRIPTION',
      'CONTENT_SLIDE2_TITLE',
      'CONTENT_SLIDE2_DESCRIPTION',
      'CONTENT_SLIDE3_TITLE',
      'CONTENT_SLIDE3_DESCRIPTION',
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.slides = [
          {
            title: values.CONTENT_SLIDE1_TITLE,
            description: values.CONTENT_SLIDE1_DESCRIPTION,
            image: 'assets/img/testbook.jpg',
          },
          {
            title: values.CONTENT_SLIDE2_TITLE,
            description: values.CONTENT_SLIDE2_DESCRIPTION,
            image: 'assets/img/testbook.jpg',
          },
          {
            title: values.CONTENT_SLIDE3_TITLE,
            description: values.CONTENT_SLIDE3_DESCRIPTION,
            image: 'assets/img/testbook.jpg',
          }
        ];
      });
  }

}
