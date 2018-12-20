import { DataSource } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DynamicValueTemplate } from '../../models/dynamicValueTemplate';
import { DynamicValueTemplateService } from '../../services/dynamic-value-template.service';
import { AddDynamicValueTemplateComponent } from '../add-dynamic-value-template/add-dynamic-value-template.component';
import { DeleteDynamicValueTemplateComponent } from '../delete-dynamic-value-template/delete-dynamic-value-template.component';
import { DynamicValueTemplateDataSource } from './dynamic-value-template-data-source';

@Component({
  selector: 'app-dynamic-value-templates',
  templateUrl: './dynamic-value-templates.component.html',
  styleUrls: ['./dynamic-value-templates.component.scss'],
})
export class DynamicValueTemplatesComponent implements OnInit {
  dataSource: DataSource<DynamicValueTemplate> | null;

  constructor(
    public dialog: MatDialog,
    public dynamicValueTemplateService: DynamicValueTemplateService) {
  }

  ngOnInit() {
    this.dataSource = new DynamicValueTemplateDataSource(this.dynamicValueTemplateService);
  }

  addNewDynamicValueTemplate() {
    this.dialog.open(AddDynamicValueTemplateComponent, {
      data: {item: DynamicValueTemplate},
    });
  }

  deleteDynamicValueTemplate(item: DynamicValueTemplate) {
    this.dialog.open(DeleteDynamicValueTemplateComponent, {data: item});
  }
}
