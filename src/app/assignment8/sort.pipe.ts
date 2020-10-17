import { Pipe, PipeTransform } from '@angular/core';


function compareName(a, b) {
  const nameA = a.name;
  const nameB = b.name;

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else {
    comparison = -1;
  }
  return comparison;
}

function compare(key, order = 'asc') {
  return function innerComp(a, b) {
    let comparison = 0;
    if (a[key] > b[key]) {
      comparison = 1;
    } else {
      comparison = -1;
    }
    return ( (order === 'desc') ? (-1 * comparison) : comparison );
  }
}

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {

  transform(value: any, order: string): any {
    //return value.sort(compareName);
    return value.sort(compare('name', order));
  }

}
