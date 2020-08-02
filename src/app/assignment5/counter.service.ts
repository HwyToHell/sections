import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  cntActiveToInactive = 0;
  cntInactiveToActive = 0;

  constructor() { }

    incActiveToInactive() {
      ++this.cntActiveToInactive;
      console.log("active -> inactive: " + this.cntActiveToInactive);
    }

    incInactiveToActive() {
      ++this.cntInactiveToActive;
      console.log("inactive -> active: " + this.cntInactiveToActive);
    }
}
