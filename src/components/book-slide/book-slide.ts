import {Component, Input} from '@angular/core';

/**
 * Generated class for the BookSlideComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'book-slide',
  templateUrl: 'book-slide.html'
})
export class BookSlideComponent {
  @Input() bookData: string;
  text: string;

  constructor() {
    console.log('Hello BookSlideComponent Component');
    this.text = 'Hello World';
  }

}
