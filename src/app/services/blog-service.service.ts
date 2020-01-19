import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BlogPost } from '../models/blog-post';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpService: HttpClient) { }

  public getBlogPost(id: string): Observable<BlogPost> {
    return this.httpService.get<BlogPost>(`http://localhost:3000/blog/${id}`).pipe(
      map(data => new BlogPost().deserialize(data)),
      catchError(() => throwError('Ad not found'))
    );
  }

  public getBlogPosts(): Observable<BlogPost[]> {
    return this.httpService.get<BlogPost[]>(`http://localhost:3000/blog`).pipe(
      map(data => Object.keys(data).map(key => new BlogPost().deserialize({...data[key], id: key })) )
    );
  }
}
