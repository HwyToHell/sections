import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, 
  OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input("srvElement") element: {type: string, name: string, content: string};
  @ViewChild("header") header: ElementRef;
  @ContentChild("contentParagraph", {static: true}) content: ElementRef;

  constructor() { 
    console.log("constructor")
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    // next line produces error in browser, as view has not been created yet
    // console.log("header content: " + this.header.nativeElement.textContent);

    // next line produces erron in browser, as content has not been created yet
    console.log("paragraph content: ", this.content.nativeElement.textContent);

  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
    console.log("paragraph content: ", this.content.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    console.log("header content: " + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy"); 
  }
}
