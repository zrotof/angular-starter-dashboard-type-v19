import { Component, computed, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { SideBarNavigationComponent } from './core/components/side-bar-navigation/side-bar-navigation.component';
import { AuthService } from './core/services/auth/auth.service';
import { SideBarStateService } from './core/services/side-bar-state/side-bar-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    HeaderComponent,
    SideBarNavigationComponent
  ]
})
export class AppComponent {
  isUserLogged = computed(()=> { 
    return this.authService.isUserLogged()
  } );

  isSideNavToggled = computed(() =>  this.sidebarStateService.isSideNavToggled());

  constructor(
    private authService : AuthService,
    private sidebarStateService : SideBarStateService,
  ){}

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(){
    const screenWidth = window.innerWidth;

    if(screenWidth <= 768){
      this.sidebarStateService.setSideBarState(true) ;
    }    
  }}
