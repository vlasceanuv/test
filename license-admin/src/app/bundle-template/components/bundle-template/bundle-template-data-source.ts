import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BundleTemplate } from '../../models/bundleTemplate';
import { BundleTemplateService } from '../../services/bundle-template.service';

export class BundleTemplateDataSource extends DataSource<BundleTemplate> {
  renderedData: BundleTemplate[] = [];

  constructor(private bundleTemplateService: BundleTemplateService) {
    super();
  }

  connect(): Observable<BundleTemplate[]> {
    this.bundleTemplateService.getBundleTemplates();
    return this.bundleTemplateService.dataChange.pipe(tap((data) => {
      this.renderedData = data;
    }));
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

}
