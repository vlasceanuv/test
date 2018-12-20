import { DataSource } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FeatureTemplate } from '../../models/featureTemplate';
import { FeatureTemplateService } from '../../services/feature-template.service';
import { AddFeatureTemplateComponent } from '../add-feature-template/add-feature-template.component';
import { DeleteFeatureTemplateComponent } from '../delete-feature-template/delete-feature-template.component';
import { FeatureTemplateDataSource } from './feature-template-data-source';

@Component({
  selector: 'app-features-template',
  templateUrl: './features-template.component.html',
  styleUrls: ['./features-template.component.scss'],
})
export class FeaturesTemplateComponent implements OnInit {
  dataSource: DataSource<FeatureTemplate> | null;

  constructor(
    public dialog: MatDialog,
    public featureTemplateService: FeatureTemplateService) {
  }

  ngOnInit() {
    this.dataSource = new FeatureTemplateDataSource(this.featureTemplateService);
  }

  addNewFeatureTemplate() {
    this.dialog.open(AddFeatureTemplateComponent, {
      data: {item: FeatureTemplate},
    });
  }

  deleteFeatureTemplate(item: FeatureTemplate) {
    this.dialog.open(DeleteFeatureTemplateComponent, {data: item});
  }
}
