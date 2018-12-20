import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DynamicValueTemplate } from '../../models/dynamicValueTemplate';
import { DynamicValueTemplateService } from '../../services/dynamic-value-template.service';

export class DynamicValueTemplateDataSource extends DataSource<DynamicValueTemplate> {
  renderedData: DynamicValueTemplate[] = [];

  constructor(private dynamicValueTemplateService: DynamicValueTemplateService) {
    super();
  }

  connect(): Observable<DynamicValueTemplate[]> {
    this.dynamicValueTemplateService.getDynamicValueTemplates();
    return this.dynamicValueTemplateService.dataChange.pipe(tap((data) => {
      this.renderedData = data;
    }));
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

}
