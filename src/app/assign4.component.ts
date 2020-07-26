import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './assign4.component.html',
  styleUrls: []
})
export class Assign4Component {
  numbers = [];

  
  onTick(count: number) {
    // console.log("onTick: " + count);
    this.numbers.push(count);
  }
}
