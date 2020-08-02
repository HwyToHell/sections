import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './section9.component.html',
  styleUrls: ['./section9.component.css'],
  providers: [AccountsService]
})

export class Section9Component implements OnInit{
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsSvs: AccountsService) {}

  ngOnInit() {
    // arrays are assigned by reference
    this.accounts = this.accountsSvs.accounts;
  }

/*   onAccountAdded(newAccount: {name: string, status: string}) {
    this.accountsSvs.addAccount(newAccount.name, newAccount.status);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
 */
}
