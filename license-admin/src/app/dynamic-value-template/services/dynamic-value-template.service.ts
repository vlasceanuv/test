import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { DynamicValueTemplate } from '../models/dynamicValueTemplate';

@Injectable({
  providedIn: 'root',
})
export class DynamicValueTemplateService {

  dataChange: BehaviorSubject<DynamicValueTemplate[]> = new BehaviorSubject<DynamicValueTemplate[]>([]);
  private endpointUrl: string = environment.ENDPOINT + '/dynamicvalue-template';

  constructor(private httpClient: HttpClient) {
  }

  get data(): DynamicValueTemplate[] {
    return this.dataChange.value;
  }

  getDynamicValueTemplates(): void {
    this.httpClient.get<DynamicValueTemplate[]>(this.endpointUrl).subscribe((data) => {
      this.dataChange.next(data);
    });
  }

  deleteDynamicValueTemplate(item: DynamicValueTemplate): Observable<any> {
    return this.httpClient.delete(this.endpointUrl + '/' + item.id).pipe(tap((data) => {
      const index = this.dataChange.value.findIndex((elt) => elt.id === item.id);
      this.dataChange.value.splice(index, 1);
      this.dataChange.next(this.dataChange.value);
    }));
  }

  addNewDynamicValueTemplate(dynamicValueTemplate: DynamicValueTemplate): Observable<any> {
    return this.httpClient.post<DynamicValueTemplate>(this.endpointUrl, dynamicValueTemplate).pipe(tap((data) => {
      this.dataChange.value.push(data);
      this.dataChange.next(this.dataChange.value);
    }));
  }
}
