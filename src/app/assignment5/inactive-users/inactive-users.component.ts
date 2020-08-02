import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users = [];
  //@Input() users: string[];
  @Output() userSetToActive = new EventEmitter<number>();

  constructor(private usersSvs: UsersService) {
    this.users = this.usersSvs.users;
  }

  onSetToActive(id: number) {
    //this.userSetToActive.emit(id);
    this.usersSvs.toggleStatus(id);
  }
}
