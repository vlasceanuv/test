import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss'],
})
export class HealthComponent implements OnInit {

  public version: string = environment.VERSION;
  public response: string = JSON.stringify({version: this.version});

  constructor() {
  }

  ngOnInit() {
  }

}
