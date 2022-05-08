import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shortenName'
})
export class ShortenNamePipe implements PipeTransform {
  transform(value: string, maxLength: number = 15): string {
    if (!value) return '';

    if (value.length > maxLength) {
      return value.slice(0, maxLength) + '...';
    } else {
      return value;
    }
  }
}