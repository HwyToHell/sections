import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = [
    {
      name: 'Max',
      active: true
    },
    {
      name: 'Anna',
      active: true
    },
    {
      name: 'Chris',
      active: false
    },
    {
      name: 'Manu',
      active: false
    }
  ];

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterSvs: CounterService) { }

  toggleStatus(id: number) {
    if (this.users[id].active) {
      this.counterSvs.incActiveToInactive();
    } else {
      this.counterSvs.incInactiveToActive();
    }
    this.users[id].active = !this.users[id].active;
  }

  // setActive(id: number) {
  //   this.inactiveUsers
  // }

}
