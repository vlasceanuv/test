import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { tap } from 'rxjs/operators';
import { ProductTemplate } from '../models/productTemplate';

@Injectable({
  providedIn: 'root',
})
export class ProductTemplateService {
  dataChange: BehaviorSubject<ProductTemplate[]> = new BehaviorSubject<ProductTemplate[]>([]);
  productByIdChange: BehaviorSubject<ProductTemplate> = new BehaviorSubject<ProductTemplate>(undefined);
  private endpointUrl: string = environment.ENDPOINT + '/product-template';

  constructor(private httpClient: HttpClient) {
  }

  get data(): ProductTemplate[] {
    return this.dataChange.value;
  }

  getProductTemplates(): void {
    this.httpClient.get<ProductTemplate[]>(this.endpointUrl).subscribe((data) => {
      this.dataChange.next(data);
    });
  }

  deleteProductTemplate(item: ProductTemplate): Observable<any> {
    return this.httpClient.delete(this.endpointByid(item.id)).pipe(tap((data) => {
      const index = this.dataChange.value.findIndex((elt) => elt.id === item.id);
      this.dataChange.value.splice(index, 1);
      this.dataChange.next(this.dataChange.value);
    }));
  }

  addNewProductTemplate(productTemplate: ProductTemplate): Observable<any> {
    return this.httpClient.post<ProductTemplate>(this.endpointUrl, productTemplate).pipe(tap((data) => {
      this.dataChange.value.push(data);
      this.dataChange.next(this.dataChange.value);
    }));
  }

  getProductTemplateById(id: number): void {
    this.httpClient.get(this.endpointByid(id)).subscribe((data: ProductTemplate) => {
        this.productByIdChange.next(data);
      },
    );
  }

  private endpointByid(id) {
    return this.endpointUrl + '/' + id;
  }

}
