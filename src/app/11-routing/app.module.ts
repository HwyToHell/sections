import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './11-routing/app.component';
import { HomeComponent } from './11-routing/home/home.component';
import { UsersComponent } from './11-routing/users/users.component';
import { ServersComponent } from './11-routing/servers/servers.component';
import { UserComponent } from './11-routing/users/user/user.component';
import { EditServerComponent } from './11-routing/servers/edit-server/edit-server.component';
import { ServerComponent } from './11-routing/servers/server/server.component';
import { ServersService } from './11-routing/servers/servers.service';
import { PageNotFoundComponent } from './11-routing/page-not-found/page-not-found.component';
import { AppRoutingModule } from './11-routing/app-routing.module';
import { AuthService } from './11-routing/auth.service';
import { AuthGuard } from './11-routing/auth-guard.service';
import { CanDeactivateGuard } from './11-routing/servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './11-routing/error-page/error-page.component';
import { ServerResolver } from './11-routing/servers/server/server-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ServersService, AuthService, AuthGuard, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
