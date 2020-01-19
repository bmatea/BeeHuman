import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Ad } from '../models/ad.model';
import { Service } from '../services/ads.service';
import { NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { NewAdFormComponent } from '../new-ad-form/new-ad-form.component';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  @Input() naslov: string;
  public title: string;
  public ads: Ad[];
  public pending: Ad[];

  ngOnInit() {
  }

  constructor(private adsService: Service, private modalService: NgbModal) {
    console.log(this.naslov);
  }

  public getAds() {
    if(this.naslov === "Donation Ads") {
      this.adsService.getAds().subscribe(ads => this.ads = ads);
      this.adsService.getPendingDonations().subscribe(ads => this.pending = ads);
    }
    else if(this.naslov === "Volunteering Ads") {
      this.adsService.getVolunteering().subscribe(ads => this.ads = ads);
      this.adsService.getPendingVolunteering().subscribe(ads => this.pending = ads);
    }
  }

  public open() {
    const modalRef = this.modalService.open(NewAdFormComponent, {size: 'lg'} );
  }

  ngOnChanges(changes) {
    if(changes.naslov) {
        {
          this.title = changes.naslov.currentValue;
          this.getAds();
        }
    }
  }
}
