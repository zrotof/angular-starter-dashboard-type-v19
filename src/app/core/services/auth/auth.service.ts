import { Injectable, signal } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    isUserLogged = signal(true);

    connectedUser = signal<User | undefined>(undefined);

}