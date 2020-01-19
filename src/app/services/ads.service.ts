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

  public getAd(id: string): Observable<Ad> {
    return this.httpService.get<Ad>(`http://localhost:3000/donations/${id}`).pipe(
      map(data => new Ad().deserialize(data)),
      catchError(() => throwError('Ad not found'))
    );
  }

  public getAds(): Observable<Ad[]> {
    return this.httpService.get<Ad[]>(`http://localhost:3000/donations`).pipe(
      map(data => Object.keys(data).map(key => new Ad().deserialize({...data[key], id: key })) )
    );
  }

  public getVolunteering(): Observable<Ad[]> {
    return this.httpService.get<Ad[]>(`http://localhost:3000/volunteering`).pipe(
      map(data => Object.keys(data).map(key => new Ad().deserialize({...data[key], id: key })) )
    );
  }

  public getUser(id: string): Observable<User> {
    return this.httpService.get<User>(`http://localhost:3000/users/${id}`).pipe(
      map(data => new User().deserialize({...data, id: id})));
  }

  public getPendingDonations(): Observable<Ad[]> {
    return this.httpService.get<Ad[]>(`http://localhost:3000/pending_donations`).pipe(
      map(data => Object.keys(data).map(key => new Ad().deserialize({...data[key], id: key })) )
    );
  }

  public getPendingVolunteering(): Observable<Ad[]> {
    console.log("pending");
    return this.httpService.get<Ad[]>(`http://localhost:3000/pending_volunteering`).pipe(
      map(data => Object.keys(data).map(key => new Ad().deserialize({...data[key], id: key })) )
    );
  }

  public approveAd(ad: Ad, title: string) {
    let json_Ad = {...ad };
    console.log(JSON.stringify(json_Ad));
    console.log(title);
    title==="Donation Ads" ?
    fetch(`http://localhost:3000/donations`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(json_Ad)
    }).then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    }) :
    fetch(`http://localhost:3000/volunteering`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(json_Ad)
    }).then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    });
    //this.httpService.delete(`http://localhost:3000/pending_donations/${ad.id}`);

    title === "Donation Ads" ?
    fetch(`http://localhost:3000/pending_donations/${ad.id}`, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    }) :
    fetch(`http://localhost:3000/pending_volunteering/${ad.id}`, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    });
  }

  public denyAd(ad: Ad, title: string) {
    console.log(title);
    title === "Donation Ads" ?
    fetch(`http://localhost:3000/pending_donations/${ad.id}`, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    }) :
    fetch(`http://localhost:3000/pending_volunteering/${ad.id}`, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    });
  }
}
