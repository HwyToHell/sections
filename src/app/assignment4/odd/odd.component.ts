import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class Odd implements OnInit {
  @Input() number: number;

  constructor() { }

  ngOnInit(): void {
  }

}
