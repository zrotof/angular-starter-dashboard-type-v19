import { Component, OnInit, ViewEncapsulation, computed } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';

import { User } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-user-connected-menu-side-bar',
  templateUrl: './user-connected-menu-side-bar.component.html',
  styleUrls: ['./user-connected-menu-side-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    SidebarModule
]
})
export class UserConnectedMenuSideBarComponent implements OnInit {

  user : User | undefined = computed( () =>  this.authService.connectedUser())()

  sideBarDisplayed : boolean = false;

  constructor(
    private authService : AuthService, 
    private router : Router) { }

  ngOnInit(): void {
    console.log(this.user)
  }

  //Handling click on burger menu
  onUserMenuClick(){
    this.sideBarDisplayed = !this.sideBarDisplayed;
  }

  onSideBarNavigation(){
    this.sideBarDisplayed = false;
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('se-connecter');
  }

  getInitials(firstname: string, lastname: string){
    const fullName = firstname+' '+lastname;
    const namesBlock = fullName.split(' ');

    let initials='';

    namesBlock.forEach(nameBlock => {
      initials = initials+ nameBlock.charAt(0).toUpperCase()[0]
    })

    return initials;
  }
}
