import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'shorten' })
export class ShortenPipe implements PipeTransform {
    transform(value: any, cutOffLen: number) {
        if (value.length > cutOffLen) {
            return value.substr(0, cutOffLen) + '...';
        } else {
            return value.substr(0, cutOffLen);
        }

    }
}