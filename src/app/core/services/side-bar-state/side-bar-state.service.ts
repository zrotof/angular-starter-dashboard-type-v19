import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarStateService {

  isSideNavToggled = signal<boolean>(false);

  setSideBarState( isToggled : boolean){
    this.isSideNavToggled.set(isToggled)
  }
}
