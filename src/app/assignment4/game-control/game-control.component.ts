import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControl implements OnInit {
  static counter: number = 0;
  isGameRunning: boolean = false; 
  timer: number;
  @Output() timerTick = new EventEmitter<number>();

  constructor() {
    console.log(GameControl.counter);
   }

  ngOnInit(): void {
  }
 
  // increment() { uses wrong this }
  increment = () => {
    ++GameControl.counter;
    // console.log("counter: " + GameControl.counter);
    this.timerTick.emit(GameControl.counter);
  }

  onStart() {
    this.timer = window.setInterval(this.increment, 1000);
  }

  onStop() {
    clearInterval(this.timer);
  }


}
