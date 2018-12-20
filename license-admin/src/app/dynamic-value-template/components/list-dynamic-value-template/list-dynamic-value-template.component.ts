import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DynamicValueTemplate } from '../../models/dynamicValueTemplate';

@Component({
  selector: 'app-list-dynamic-value-template',
  templateUrl: './list-dynamic-value-template.component.html',
  styleUrls: ['./list-dynamic-value-template.component.scss']
})
export class ListDynamicValueTemplateComponent implements OnInit {

  @Input() displayedColumns: string[];
  @Input() dataSource: DataSource<DynamicValueTemplate>;
  @Output() add = new EventEmitter();
  @Output() delete = new EventEmitter();

  data: DynamicValueTemplate[];

  selection = new SelectionModel<DynamicValueTemplate>(true, []);

  constructor() {
  }

  ngOnInit() {
    if (this.dataSource instanceof DataSource) {
      this.dataSource.connect(undefined).subscribe((data: DynamicValueTemplate[]) => {
        this.data = data;
      });
    }
  }

  addNewDynamicValueTemplate() {
    this.add.emit();
  }

  deleteDynamicValueTemplate(dynamicValueTemplate: DynamicValueTemplate) {
    this.delete.emit(dynamicValueTemplate);
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
