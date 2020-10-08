import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {


  public pages: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.pages = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
