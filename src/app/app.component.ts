import { Component, HostListener, Signal, computed } from '@angular/core';
import * as AOS from 'aos';
import * as JWT from 'jwt-decode';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFaceLaugh } from '@fortawesome/free-regular-svg-icons'
import { faFaceMehBlank, faFaceMeh, faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { HeaderComponent } from './core/components/header/header.component';
import { SideBarNavigationComponent } from './core/components/side-bar-navigation/side-bar-navigation.component';
import { Observable } from 'rxjs';
import { AuthService } from './core/services/auth/auth.service';
import { SideBarStateService } from './core/services/side-bar-state/side-bar-state.service';
import { UsersService } from './core/services/users/users.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgClass,
    RouterOutlet,
    AsyncPipe,
    HeaderComponent,
    SideBarNavigationComponent,
    FontAwesomeModule
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title ="";

  isUserLogged = this.authService.isUserLogged();

  isSideNavToggled = computed( () => this.sidebarStateService.isSideNavToggled());

  constructor(
    private authService : AuthService,
    private userService : UsersService,
    private sidebarStateService : SideBarStateService
  ){ }

  ngOnInit(): void {
    AOS.init();
    this.initAppOnReload();
    this.onResize();
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(){
    let screenWidth = window.innerWidth;
  
    if(screenWidth <= 768){
      this.sidebarStateService.isSideNavToggled.set(true);
    }
    else{
      if(!this.isSideNavToggled){
        this.sidebarStateService.isSideNavToggled.set(false);
      }
    }
  }

  initAppOnReload(){
    
    const token = this.authService.getToken();

    if(token){

      const payload : {exp: number, iat: number, sub: string } = JWT.default(token);
      
      const connectedUserId = payload.sub ;
      let timeout = payload.exp - payload.iat ;

      if(timeout > 0){
        this.setConnectedUser(connectedUserId)
        this.authService.isUserLogged.set(true);
        this.authService.setExpirationCounter(timeout);
      }
    }

    else{
      this.setConnectedUser("1")

    }
  }

  setConnectedUser(userId : string){
    this.userService.getUserById(userId).subscribe(
      res => {
        console.log(res)
        this.authService.connectedUser.set(res);
      }
    )
  }

}
