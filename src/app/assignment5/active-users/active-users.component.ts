import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users = [];
  // @Input() users: string[];
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private usersSvs: UsersService) {
    this.users = this.usersSvs.users;
  }

  onSetToInactive(id: number) {
    //this.userSetToInactive.emit(id);
    this.usersSvs.toggleStatus(id);
  }
}
