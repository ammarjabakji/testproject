import {NgModule} from '@angular/core';
import {BookSlideComponent} from './book-slide/book-slide';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [BookSlideComponent],
  imports: [TranslateModule],
  exports: [BookSlideComponent]
})
export class ComponentsModule {

}
