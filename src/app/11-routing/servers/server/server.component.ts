import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // + converts from string to number
    //const id = +this.route.snapshot.params['id'];
    //this.server = this.serversService.getServer(id);
    //console.log("route id:", typeof(id), id);
    this.route.params.subscribe(
      (params: Params) => {
        let id = +params['id'];
        this.server = this.serversService.getServer(id);
        console.log("subscr id:", typeof(id), id);
      }
    )
  }

  onEdit() {
    // already on servers/id -> just append /edit
    this.router.navigate(['edit'], {
      relativeTo: this.route, 
      queryParamsHandling: 'preserve'
    });
  }

}
