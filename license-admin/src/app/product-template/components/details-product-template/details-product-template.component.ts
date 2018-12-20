import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductTemplate } from '../../models/productTemplate';

@Component({
  selector: 'app-details-product-template',
  templateUrl: './details-product-template.component.html',
  styleUrls: ['./details-product-template.component.scss']
})
export class DetailsProductTemplateComponent implements OnInit {

  @Input() dataSource: Observable<ProductTemplate>;
  productTemplate: ProductTemplate = new ProductTemplate();

  constructor() {
  }

  ngOnInit() {
    this.dataSource.subscribe((productTemplate: ProductTemplate) => {
      if (productTemplate) {
        this.productTemplate = productTemplate;
      }
    });
  }

}
