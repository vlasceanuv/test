import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FeatureTemplate } from '../models/featureTemplate';

@Injectable({
  providedIn: 'root',
})
export class FeatureTemplateService {

  dataChange: BehaviorSubject<FeatureTemplate[]> = new BehaviorSubject<FeatureTemplate[]>([]);
  private endpointUrl: string = environment.ENDPOINT + '/feature-template';

  constructor(private httpClient: HttpClient) {
  }

  get data(): FeatureTemplate[] {
    return this.dataChange.value;
  }

  getFeatureTemplates(): void {
    this.httpClient.get<FeatureTemplate[]>(this.endpointUrl).subscribe((data) => {
      this.dataChange.next(data);
    });
  }

  deleteFeatureTemplate(item: FeatureTemplate): Observable<any> {
    return this.httpClient.delete(this.endpointUrl + '/' + item.id).pipe(tap(() => {
      const index = this.dataChange.value.findIndex((elt) => elt.id === item.id);
      this.dataChange.value.splice(index, 1);
      this.dataChange.next(this.dataChange.value);
    }));
  }

  addNewFeatureTemplate(featureTemplate: FeatureTemplate): Observable<any> {
    return this.httpClient.post<FeatureTemplate>(this.endpointUrl, featureTemplate).pipe(tap((data) => {
      this.dataChange.value.push(data);
      this.dataChange.next(this.dataChange.value);
    }));
  }
}
