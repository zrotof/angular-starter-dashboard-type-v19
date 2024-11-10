import { NgClass } from '@angular/common';
import { Component, computed, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideBarStateService } from '../../services/side-bar-state/side-bar-state.service';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { Menu } from '../../models/side-bar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-bar-navigation',
  templateUrl: './side-bar-navigation.component.html',
  styleUrls: ['./side-bar-navigation.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgClass,
    RouterLink,
    ConvertStringLabelToFontawesomeIconPipe,
    RouterLinkActive,
    FontAwesomeModule
  ]
})
export class SideBarNavigationComponent {
  
  isSideNavToggled = computed(() => this.sidebarStateService.isSideNavToggled());

  menuList : Menu[] = [
    {
      icon: 'faUserTie',
      label: "Menu 1",
      menuItems: [
        {label:"", url:""}
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
      icon: 'faHouse',
      label: "Menu 4",
          menuItems: [
        {label: "Utilisateurs", url: "/utilisateurs"},
        {label: "Roles", url: "g"}
      ],
      active: false,
    },

    {
      icon: 'faCartPlus',
      label: "Menu 5",
          menuItems: [
            {label: "sous-menu-1", url:"a"},
            {label: "sous-menu-2", url:"b"}
              ],
      active: false
    },
  ];


  constructor(private sidebarStateService : SideBarStateService) {}

  onSideBarToggled(){
    this.sidebarStateService.setSideBarState(!this.isSideNavToggled())
  }

  onDropdownMenuClicked( index: number){
    this.menuList[index].active = !this.menuList[index].active;
  }

}
