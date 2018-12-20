import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BundleTemplate } from '../../models/bundleTemplate';
import { BundleTemplateDataSource } from '../bundle-template/bundle-template-data-source';

@Component({
  selector: 'app-list-bundle-template',
  templateUrl: './list-bundle-template.component.html',
  styleUrls: ['./list-bundle-template.component.scss']
})
export class ListBundleTemplateComponent implements OnInit {
  displayedColumns = ['name', 'description', 'licenseModel', 'actions'];

  @Input() dataSource: BundleTemplateDataSource;
  @Output() add = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  addBundleTemplate() {
    this.add.emit();
  }

  deleteBundleTemplate(bundleTemplate: BundleTemplate) {
    this.delete.emit(bundleTemplate);
  }
}
