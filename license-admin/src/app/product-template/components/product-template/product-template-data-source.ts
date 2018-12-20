import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProductTemplate } from '../../models/productTemplate';
import { ProductTemplateService } from '../../services/product-template.service';

export class ProductTemplateDataSource extends DataSource<ProductTemplate> {
  renderedData: ProductTemplate[] = [];

  constructor(private productTemplateService: ProductTemplateService) {
    super();
  }

  connect(): Observable<ProductTemplate[]> {
    this.productTemplateService.getProductTemplates();
    return this.productTemplateService.dataChange.pipe(tap((data) => {
      this.renderedData = data;
    }));
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

}
