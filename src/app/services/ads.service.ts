import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { map, catchError } from 'rxjs/operators';
import { Ad } from '../models/ad.model';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private httpService: HttpClient) { }

  public getAd(id: number): Observable<Ad> {
    return this.httpService.get<User>(`http://localhost:3000/ads/${id}`).pipe(
      map(data => new Ad().deserialize(data)),
      catchError(() => throwError('Ad not found'))
    );
  }

  public getAds(): Observable<Ad[]> {
    return this.httpService.get<Ad[]>(`http://localhost:3000/ads`).pipe(
      map(data => data.map(dat => new Ad().deserialize(dat)))
    );
  }

  public getUser(id: number): Observable<User> {
    return this.httpService.get<User>(`http://localhost:3000/user/${id}`).pipe(
      map(data => new User().deserialize(data)),
      catchError(() => throwError('User not found'))
    );
  }

}
