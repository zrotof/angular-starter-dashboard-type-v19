import { Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { UserConnectedMenuSideBarComponent } from '../user-connected-menu-side-bar/user-connected-menu-side-bar.component';
import { RouterLink } from '@angular/router';
import { SideBarStateService } from '../../services/side-bar-state/side-bar-state.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [
        RouterLink,
        FontAwesomeModule,
        ConvertStringLabelToFontawesomeIconPipe,
        UserConnectedMenuSideBarComponent
    ]
})
export class HeaderComponent {

  private readonly sidebarStateService = inject(SideBarStateService)
  
  protected isSideNavToggled = computed(()=>  this.sidebarStateService.isSideNavToggled());


  onSideBarToggled(){
    this.sidebarStateService.setSideBarState(!this.isSideNavToggled())
  }
}
