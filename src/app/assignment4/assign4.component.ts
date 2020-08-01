import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './assign4.component.html',
  styleUrls: []
})
export class Assign4Component {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];
  
  onTick(count: number) {
    // console.log("onTick: " + count);
    if (count % 2 === 0) {
      this.evenNumbers.push(count);
    } else {
      this.oddNumbers.push(count);
    }
  }

}
