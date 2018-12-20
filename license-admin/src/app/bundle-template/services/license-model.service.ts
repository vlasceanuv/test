import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LicenseModelService {

  licenseModels: BehaviorSubject<String[]> = new BehaviorSubject<String[]>([]);
  private endpointUrl: string = environment.ENDPOINT + '/bundle-template/license-model';

  constructor(private httpClient: HttpClient) {
  }

  getLicenseModels(): void {
    this.httpClient.get<string[]>(this.endpointUrl).subscribe((data) => {
      this.licenseModels.next(data);
    });
  }
}
