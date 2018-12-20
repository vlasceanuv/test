import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductTemplate } from '../../models/productTemplate';
import { ProductTemplateDataSource } from '../product-template/product-template-data-source';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-list-product-template',
  templateUrl: './list-product-template.component.html',
  styleUrls: ['./list-product-template.component.scss']
})
export class ListProductTemplateComponent implements OnInit {
  @Input() displayedColumns: string[];
  @Input() dataSource: ProductTemplateDataSource;
  @Output() add = new EventEmitter();
  @Output() delete = new EventEmitter();

  selection = new SelectionModel<ProductTemplate>(true, []);
  data: ProductTemplate[];

  constructor() {
  }

  ngOnInit() {
    if (this.dataSource instanceof ProductTemplateDataSource) {
      this.dataSource.connect().subscribe((data: ProductTemplate[]) => {
        this.data = data;
      });
    }
  }

  addProductTemplate() {
    this.add.emit();
  }

  deleteProductTemplate(productTemplate: ProductTemplate) {
    this.delete.emit(productTemplate);
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.data.forEach((row) => this.selection.select(row));
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.length;
    return numSelected === numRows;
  }
}
