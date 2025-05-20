import { inject, Injectable, signal } from '@angular/core';
import { STORAGE_KEYS } from '@core/constants/storage-keys.constants';
import { NewUser, User } from '@core/models/user.model';
import { OnStorageInit, StorageService } from './storage.service';

const ErrorText = ' attempt failed, please try again' as const;

@Injectable({
  providedIn: 'root',
})
export class AccountService implements OnStorageInit {
  private storageService = inject(StorageService);
  private user = signal<User | null>(null);
  private users = signal<User[]>([]);

  currentUser = this.user.asReadonly();

  storageInit() {
    const user = this.storageService.getItem(STORAGE_KEYS.USER);
    if (user) this.user.set(JSON.parse(user));
  }

  register(data: NewUser) {
    const userExists = this.getUser(data.email);

    if (!userExists) {
      const time = Date.now().toString();

      const user = {
        email: data.email,
        password: this.encrypt(data.password, time),
        id: time,
        createdAt: time,
      };

      this.users.update((prev) => [...prev, user]);
      this.login(data);
      return true;
    }

    throw new Error('Registration' + ErrorText);
  }

  login(data: NewUser) {
    const user = this.getUser(data.email);

    if (user) {
      const password = this.encrypt(data.password, user.createdAt);
      if (password === user.password) {
        this.user.set(user);
        this.setUserStorage(user);
        return true;
      }
    }

    throw new Error('Login' + ErrorText);
  }

  logout() {
    this.user.set(null);
    this.removeUserStorage();
  }

  private getUser(email: string) {
    return this.users().find((user) => user.email === email);
  }

  private setUserStorage(user: User) {
    this.storageService.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  }

  private removeUserStorage() {
    this.storageService.removeItem(STORAGE_KEYS.USER);
  }

  private encrypt(data: string, key: string) {
    return btoa(
      data
        .split('')
        .map((char, i) =>
          String.fromCharCode(
            char.charCodeAt(0) ^ key.charCodeAt(i % key.length)
          )
        )
        .join('')
    );
  }
}
