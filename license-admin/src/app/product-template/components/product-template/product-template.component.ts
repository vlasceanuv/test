import { DataSource } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DynamicValueTemplateDataSource } from 'src/app/dynamic-value-template/components/dynamic-value-templates/dynamic-value-template-data-source';
import { DynamicValueTemplateService } from 'src/app/dynamic-value-template/services/dynamic-value-template.service';
import { FeatureTemplateDataSource } from 'src/app/feature-template/components/features-template/feature-template-data-source';
import { FeatureTemplate } from 'src/app/feature-template/models/featureTemplate';
import { FeatureTemplateService } from 'src/app/feature-template/services/feature-template.service';
import { ProductTemplate } from '../../models/productTemplate';
import { ProductTemplateService } from '../../services/product-template.service';
import { AddProductTemplateComponent } from '../add-product-template/add-product-template.component';
import { DeleteProductTemplateComponent } from '../delete-product-template/delete-product-template.component';
import { ProductTemplateDataSource } from './product-template-data-source';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.scss']
})
export class ProductTemplateComponent implements OnInit {
  dataSource: ProductTemplateDataSource | null;
  featuresDataSource: DataSource<FeatureTemplate> | null;
  dynamicValuesDataSource: DynamicValueTemplateDataSource | null;

  productTemplateId: number;

  constructor(
    public dialog: MatDialog,
    public productTemplateService: ProductTemplateService,
    public featureTemplateService: FeatureTemplateService,
    public dynamicValueTemplateService: DynamicValueTemplateService,
    private activeRoute: ActivatedRoute,
  ) {
  }

  get shouldDisplayDetailsPage() {
    return (this.productTemplateId !== undefined);
  }

  ngOnInit() {
    this.dataSource = new ProductTemplateDataSource(this.productTemplateService);
    this.featuresDataSource = new FeatureTemplateDataSource(this.featureTemplateService);
    this.dynamicValuesDataSource = new DynamicValueTemplateDataSource(this.dynamicValueTemplateService);

    this.activeRoute.queryParams.subscribe((params) => {
      if (params.id) {
        this.productTemplateId = params.id;
        this.productTemplateService.getProductTemplateById(this.productTemplateId);
      } else {
        this.productTemplateId = undefined;
      }
    });

  }

  addNewProductTemplate() {
    const newProductTemplate = new ProductTemplate();
    this.dialog.open(AddProductTemplateComponent, {
      width: '800px',
      height: '600px',
      data: {
        productTemplate: newProductTemplate,
        featuresDataSource: this.featuresDataSource,
        dynamicValuesDataSource: this.dynamicValuesDataSource,
      },
    });
  }

  deleteProductTemplate(item: ProductTemplate) {
    this.dialog.open(DeleteProductTemplateComponent, {data: item});
  }
}
