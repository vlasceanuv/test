import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ProductInUseMessage } from '../../models/productInUseMessage';

@Component({
  selector: 'app-error-inuse-product-template',
  templateUrl: './error-inuse-product-template.component.html',
  styleUrls: ['./error-inuse-product-template.component.scss']
})
export class ErrorInuseProductTemplateComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ProductInUseMessage) {
  }

  ngOnInit() {
  }

}
