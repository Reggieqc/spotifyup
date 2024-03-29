import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[], args?: any): any {
    if (!images) {
      return 'assets/imgs/noimage.jpg'
    }

    if (images.length > 0) {
      return images[0].url;
    } else {
      return 'assets/imgs/noimage.jpg'
    }
  }
}
