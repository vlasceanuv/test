import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FeatureTemplate } from '../../models/featureTemplate';
import { FeatureTemplateService } from '../../services/feature-template.service';

export class FeatureTemplateDataSource extends DataSource<FeatureTemplate> {
  renderedData: FeatureTemplate[] = [];

  constructor(private featureService: FeatureTemplateService) {
    super();
  }

  connect(): Observable<FeatureTemplate[]> {
    this.featureService.getFeatureTemplates();
    return this.featureService.dataChange.pipe(tap((data) => {
      this.renderedData = data;
    }));
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

}
