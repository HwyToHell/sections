import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControl implements OnInit {
  counter: number = 0;
  timer: number;
  @Output() timerTick = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
  }
 
  onStart() {
    this.timer = setInterval(() => {
      this.timerTick.emit(++this.counter);
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
  }


}
