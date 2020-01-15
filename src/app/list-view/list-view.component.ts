import { Component, OnInit } from '@angular/core';
import { Ad } from '../models/ad.model';
import { Service } from '../services/ads.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  public ads: Ad[];

  ngOnInit() {
  }

  constructor(private adsService: Service) {
    this.getAds();
  }

  public getAds() {
    this.adsService.getAds().subscribe(ads => this.ads = ads);
  }
}
