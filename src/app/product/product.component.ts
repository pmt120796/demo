import { Component, OnInit } from '@angular/core';
import { PagerService } from '../services/index';
declare var $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  pager: any = {};
  pagedItems: any[];
  data = [
    {
      id: '11131',
      name: 'Otto',
      type: 'Red'
    },
    {
      id: '11132',
      name: 'Thornton',
      type: 'Yellow'
    },
    {
      id: '11133',
      name: 'Otto',
      type: 'Bird'
    }
  ];
  constructor(private pagerService: PagerService) { }

  ngOnInit(): void {
    $('.selectpicker').selectpicker('refresh');
    this.setPage(1);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.data.length, page);

    // get current page of items
    // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
