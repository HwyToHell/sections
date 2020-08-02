import { Component, Input } from '@angular/core';
// import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(
    // service injections
    // private loggingService: LoggingService,
    private accountsSvs: AccountsService) {};

  onSetTo(status: string) {
    this.accountsSvs.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountsSvs.statusUpdated.emit(status);
  }
}
