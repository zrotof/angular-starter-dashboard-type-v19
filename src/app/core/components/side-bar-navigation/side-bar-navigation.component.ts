import { Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideBarStateService } from '../../services/side-bar-state/side-bar-state.service';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { Menu } from '../../models/side-bar';

@Component({
    selector: 'app-side-bar-navigation',
    templateUrl: './side-bar-navigation.component.html',
    styleUrls: ['./side-bar-navigation.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [
        RouterLink,
        ConvertStringLabelToFontawesomeIconPipe,
        RouterLinkActive,
        FontAwesomeModule
    ]
})

export class SideBarNavigationComponent {
  private readonly sidebarStateService = inject(SideBarStateService);

  isSideNavToggled = computed(() => this.sidebarStateService.isSideNavToggled());

  menuList : Menu[] = [
    {
      icon: 'faChartSimple',
      label: "Tableau De Bord",
      menuItems: [
        {label:"", url:"tableau-de-bord"}
      ],
      active: false
    },
    {
      icon: 'faUsers',
      label: "Menu 2",
          menuItems: [
            {label: "sous-menu-1", url:"c"},
            {label: "sous-menu-2", url:"d"}
              ],
      active: false
    }
    ,
    {
      icon: 'faChartLine',
      label: "Menu 3",
          menuItems: [
            {label: "sous-menu-1", url:"e"},
            {label: "sous-menu-2", url:"f"}
              ],
      active: false
    },
    {
      icon: 'faCartPlus',
      label: "Menu 4",
          menuItems: [
            {label: "sous-menu-1", url:"a"},
            {label: "sous-menu-2", url:"b"}
              ],
      active: false
    },
  ];


  onSideBarToggled(){
    this.sidebarStateService.setSideBarState(!this.isSideNavToggled())
  }

  onDropdownMenuClicked( index: number){
    this.menuList[index].active = !this.menuList[index].active;
  }

}
