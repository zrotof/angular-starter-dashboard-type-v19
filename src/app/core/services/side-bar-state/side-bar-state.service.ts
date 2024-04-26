import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarStateService {

  isSideNavToggled : WritableSignal<boolean> = signal(false);

}
