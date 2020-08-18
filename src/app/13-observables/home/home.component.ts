import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private obsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.obsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customObservable = Observable.create(observer => {
      let count = 0;
      setInterval( () => {
        observer.next(count);
        if (count == 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error('count > 3');
        }
        ++count;
      }, 1000);
    });

    this.obsSubscription = customObservable.subscribe(data => {
      console.log("custom obs:", data);
    }, error => {
      console.log(error);
      alert(error);
    }, complete => {
      console.log("completed!");
    });

  }

  ngOnDestroy() {
    this.obsSubscription.unsubscribe();
  }

}
