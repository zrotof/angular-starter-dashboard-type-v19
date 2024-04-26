import { NgClass } from '@angular/common';
import { Component, Input, OnInit, computed } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideBarStateService } from '../../services/side-bar-state/side-bar-state.service';
import { MenuItem } from 'primeng/api';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-side-bar-navigation',
  templateUrl: './side-bar-navigation.component.html',
  styleUrls: ['./side-bar-navigation.component.scss'],
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    RouterLinkActive,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
]
})
export class SideBarNavigationComponent implements OnInit {
  
  isSideNavToggled = computed(() => this.sidebarStateService.isSideNavToggled() ) ;

  menuList !: MenuItem[];

  constructor( 
    private router : Router,
    private sidebarStateService : SideBarStateService
    ) {}

  ngOnInit(): void {
    this.initMenus();
  }

  initMenus(){
    this.menuList = [
      {
        icon: 'faCartPlus',
        label: "Menu 1",
        items : [
          {label: "sous-menu-1", url:""},
          {label: "sous-menu-2", url:""}
        ]
      },
      {
        icon: 'faUsers',
        label: "Menu 2",
        items : [
          {label: "sous-menu-1", url:""},
          {label: "sous-menu-2", url:""}
        ]
      },
      {
        icon: 'faChartLine',
        label: "Menu 3",
        url:"/"
      },
      {
        icon: 'faHouse',
        label: "Menu 4",
        items : [
          {label: "sous-menu-1", url:""},
          {label: "sous-menu-2", url:""}
        ]
      },
      {
        icon: 'faUserTie',
        label: "Menu 5",
        url:"/"
      }
    ]
  }
  
  navigate(url: string): void {
      this.router.navigateByUrl(url);
  }

  toggleChildren(item: any): void {
    if (item.items && item.items.length > 0) {
      item.expanded = !item.expanded;
    }
  }

}
