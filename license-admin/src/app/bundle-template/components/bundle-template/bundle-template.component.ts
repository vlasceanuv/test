import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ProductTemplateDataSource } from 'src/app/product-template/components/product-template/product-template-data-source';
import { ProductTemplateService } from 'src/app/product-template/services/product-template.service';
import { BundleTemplate } from '../../models/bundleTemplate';
import { BundleTemplateService } from '../../services/bundle-template.service';
import { AddBundleTemplateComponent } from '../add-bundle-template/add-bundle-template.component';
import { DeleteBundleTemplateComponent } from '../delete-bundle-template/delete-bundle-template.component';
import { BundleTemplateDataSource } from './bundle-template-data-source';
import { LicenseModelService } from '../../services/license-model.service';
import { LicenseModelDataSource } from './license-model-data-source';

@Component({
  selector: 'app-bundle-template',
  templateUrl: './bundle-template.component.html',
  styleUrls: ['./bundle-template.component.scss']
})
export class BundleTemplateComponent implements OnInit {
  dataSource: BundleTemplateDataSource | null;
  productsDataSource: ProductTemplateDataSource | null;
  licenseModelDataSource: LicenseModelDataSource | null;
  bundleTemplateId: number;
  licenseModelOptions: String[];

  constructor(
    public dialog: MatDialog,
    public bundleTemplateService: BundleTemplateService,
    public licenseModelService: LicenseModelService,
    public productTemplateService: ProductTemplateService,
    private activeRoute: ActivatedRoute,
  ) {
  }

  get shouldDisplayDetailsPage() {
    return (this.bundleTemplateId !== undefined);
  }

  ngOnInit() {
    this.dataSource = new BundleTemplateDataSource(this.bundleTemplateService);
    this.productsDataSource = new ProductTemplateDataSource(this.productTemplateService);
    this.licenseModelDataSource = new LicenseModelDataSource(this.licenseModelService);

    this.licenseModelDataSource.connect().subscribe(((data: String[]) => {
      this.licenseModelOptions = data;
    }));

    this.activeRoute.queryParams.subscribe((params) => {
      if (params.id) {
        this.bundleTemplateId = params.id;
        this.bundleTemplateService.getBundleTemplateById(this.bundleTemplateId);
      } else {
        this.bundleTemplateId = undefined;
      }
    });

  }

  addNewBundleTemplate() {
    const newBundleTemplate = new BundleTemplate();
    this.dialog.open(AddBundleTemplateComponent, {
      width: '800px',
      height: '600px',
      data: {
        bundleTemplate: newBundleTemplate,
        productsDataSource: this.productsDataSource,
        licenseModelOptions: this.licenseModelOptions,
      },
    });
  }

  deleteBundleTemplate(item: BundleTemplate) {
    this.dialog.open(DeleteBundleTemplateComponent, {data: item});
  }
}
