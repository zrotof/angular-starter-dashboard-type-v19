import { Component, computed, HostListener, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { SideBarNavigationComponent } from './core/components/side-bar-navigation/side-bar-navigation.component';
import { AuthService } from './core/services/auth/auth.service';
import { SideBarStateService } from './core/services/side-bar-state/side-bar-state.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        HeaderComponent,
        SideBarNavigationComponent
    ]
})
export class AppComponent {
  private authService = inject(AuthService);
  private sidebarStateService = inject(SideBarStateService);

  isUserLogged = computed(()=> { 
    return this.authService.isUserLogged()
  } );

  isSideNavToggled = computed(() =>  this.sidebarStateService.isSideNavToggled());

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
