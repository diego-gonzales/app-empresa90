import { Pipe, PipeTransform } from '@angular/core';
import { ProductsResponse } from '../interfaces/products-response.interface';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(value: ProductsResponse): string  {
    return 'assets/no-image.jpg';
  }

}
