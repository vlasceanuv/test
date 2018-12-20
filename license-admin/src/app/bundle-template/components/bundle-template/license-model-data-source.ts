import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { LicenseModelService } from '../../services/license-model.service';

export class LicenseModelDataSource extends DataSource<String> {

  constructor(private licenseModelService: LicenseModelService) {
    super();
  }

  connect(): Observable<String[]> {
    this.licenseModelService.getLicenseModels();
    return this.licenseModelService.licenseModels;
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

}
