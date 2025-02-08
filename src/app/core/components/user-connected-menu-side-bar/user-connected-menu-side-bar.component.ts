import { Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';

import {MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from '../../services/auth/auth.service';
import { Subscription } from 'rxjs';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
    selector: 'app-user-connected-menu-side-bar',
    templateUrl: './user-connected-menu-side-bar.component.html',
    styleUrls: ['./user-connected-menu-side-bar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [MessageService, ConfirmationService],
    imports: [
      FontAwesomeModule,
      ConvertStringLabelToFontawesomeIconPipe,
        SidebarModule,
        ConfirmDialogModule,
        ToastModule
    ]
})
export class UserConnectedMenuSideBarComponent {

  sideBarDisplayed : boolean = false;

  subscription : Subscription[] = [];

  //Handling click on burger menu
  onUserMenuClick(){
    this.sideBarDisplayed = !this.sideBarDisplayed;
  }

  onSideBarNavigation(){
    this.sideBarDisplayed = false;
  }

}
