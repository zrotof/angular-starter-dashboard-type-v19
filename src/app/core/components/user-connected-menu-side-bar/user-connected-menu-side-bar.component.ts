import { Component, computed, ViewEncapsulation } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';

import {MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from '../../services/auth/auth.service';
import { Subscription } from 'rxjs';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-user-connected-menu-side-bar',
  templateUrl: './user-connected-menu-side-bar.component.html',
  styleUrls: ['./user-connected-menu-side-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  providers: [MessageService,ConfirmationService],
  imports: [
    SidebarModule,
    ConfirmDialogModule,
    ToastModule
  ]
})
export class UserConnectedMenuSideBarComponent {

  user = computed(()=> this.authService.connectedUser())() ;

  sideBarDisplayed : boolean = false;

  subscription : Subscription[] = [];

  constructor(
    private authService : AuthService, 
  ) { }

  //Handling click on burger menu
  onUserMenuClick(){
    this.sideBarDisplayed = !this.sideBarDisplayed;
  }

  onSideBarNavigation(){
    this.sideBarDisplayed = false;
  }

}
