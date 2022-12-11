import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAbstractSearch, User } from '../modals/data-modals';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  searchUser(value: string): Observable<UserAbstractSearch> {
    return this.http.get<UserAbstractSearch>(`https://api.github.com/search/users?q=${value}`);
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(`https://api.github.com/users/${userId}`)
  }
}
