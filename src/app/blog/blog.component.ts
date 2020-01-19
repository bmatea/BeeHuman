import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog-service.service';
import { BlogPost } from '../models/blog-post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public posts: BlogPost[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getPosts();
  }

  public getPosts() {
    this.blogService.getBlogPosts().subscribe(posts => this.posts = posts);
  }

}
