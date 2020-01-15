import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user.model';
import { Ad } from '../models/ad.model';
import { Service } from '../services/ads.service';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {
  @Input() ad: Ad;
  author: User;

  constructor(private service: Service) {
  }

  ngOnInit(): void {
    this.service.getUser(this.ad.author).subscribe(user => this.author = user);
  }


}
