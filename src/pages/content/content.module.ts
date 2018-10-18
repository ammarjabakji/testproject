import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ContentPage } from './content';
import { StarRatingModule } from 'ionic3-star-rating';


@NgModule({
  declarations: [
    ContentPage,
  ],
  imports: [
    IonicPageModule.forChild(ContentPage),
    TranslateModule.forChild(),
    StarRatingModule
  ],
  exports: [
    ContentPage
  ]
})
export class ContentPageModule { }
