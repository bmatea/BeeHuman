import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../models/blog-post';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog-service.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  id: string;
  public post: BlogPost;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.blogService.getBlogPost(this.id).subscribe(post => this.post = post);
    });
  }
}
