import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ad } from '../models/ad.model';
import { User } from '../models/user.model';
import { Service } from '../services/ads.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

  @Input() ad: Ad;
  @Input() title: string;
  @Output() updateFun: EventEmitter<any> = new EventEmitter();
  author: User;
  closeResult: string;

  constructor(private service: Service, private modalService: NgbModal) {}

  ngOnInit() {
    this.service.getUser(this.ad.author).subscribe(user => this.author = user);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if(this.closeResult === `Closed with: Approve click`)
        {
          this.approve();
          this.updateFun.emit();
        }
        else if(this.closeResult === `Closed with: Deny click`)
        {
          this.deny();
          this.updateFun.emit();
        }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  approve() {
    this.service.approveAd(this.ad, this.title);
    this.service.getAds();
  }

  deny() {
    this.service.denyAd(this.ad, this.title);
    this.service.getAds();
  }

  getDismissReason(reason: any) {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
