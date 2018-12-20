import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FeatureTemplate } from '../../models/featureTemplate';

@Component({
  selector: 'app-list-feature-template',
  templateUrl: './list-feature-template.component.html',
  styleUrls: ['./list-feature-template.component.scss']
})
export class ListFeatureTemplateComponent implements OnInit {

  @Input() displayedColumns: string[];
  @Input() dataSource: DataSource<FeatureTemplate>;
  @Output() add = new EventEmitter();
  @Output() delete = new EventEmitter();

  data: FeatureTemplate[];

  selection = new SelectionModel<FeatureTemplate>(true, []);

  constructor() {
  }

  ngOnInit() {
    if (this.dataSource instanceof DataSource) {
      this.dataSource.connect(undefined).subscribe((data: FeatureTemplate[]) => {
        this.data = data;
      });
    }
  }

  addNewFeatureTemplate() {
    this.add.emit();
  }

  deleteFeatureTemplate(featureTemplate: FeatureTemplate) {
    this.delete.emit(featureTemplate);
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
