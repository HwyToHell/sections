import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class Odd implements OnInit {
  oddNumbers =[];

  constructor() { }

  ngOnInit(): void {
  }

}
