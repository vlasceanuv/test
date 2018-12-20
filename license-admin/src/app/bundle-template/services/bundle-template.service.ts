import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { BundleTemplate } from '../models/bundleTemplate';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BundleTemplateService {
  dataChange: BehaviorSubject<BundleTemplate[]> = new BehaviorSubject<BundleTemplate[]>([]);
  bundleByIdChange: BehaviorSubject<BundleTemplate> = new BehaviorSubject<BundleTemplate>(undefined);
  private endpointUrl: string = environment.ENDPOINT + '/bundle-template';

  constructor(private httpClient: HttpClient) {
  }

  get data(): BundleTemplate[] {
    return this.dataChange.value;
  }

  getBundleTemplates(): void {
    this.httpClient.get<BundleTemplate[]>(this.endpointUrl).subscribe((data) => {
      this.dataChange.next(data);
    });
  }

  deleteBundleTemplate(item: BundleTemplate): Observable<any> {
    return this.httpClient.delete(this.endpointByid(item.id)).pipe(tap((data) => {
      const index = this.dataChange.value.findIndex((elt) => elt.id === item.id);
      this.dataChange.value.splice(index, 1);
      this.dataChange.next(this.dataChange.value);
    }));
  }

  addNewBundleTemplate(bundleTemplate: BundleTemplate): Observable<any> {
    return this.httpClient.post<BundleTemplate>(this.endpointUrl, bundleTemplate).pipe(tap((data) => {
      this.dataChange.value.push(data);
      this.dataChange.next(this.dataChange.value);
    }));
  }

  getBundleTemplateById(id: number): void {
    this.httpClient.get(this.endpointByid(id)).subscribe((data: BundleTemplate) => {
        this.bundleByIdChange.next(data);
      },
    );
  }

  private endpointByid(id) {
    return this.endpointUrl + '/' + id;
  }

}
