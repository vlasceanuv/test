import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BundleTemplate } from '../../models/bundleTemplate';

@Component({
  selector: 'app-details-bundle-template',
  templateUrl: './details-bundle-template.component.html',
  styleUrls: ['./details-bundle-template.component.scss']
})
export class DetailsBundleTemplateComponent implements OnInit {

  @Input() dataSource: Observable<BundleTemplate>;
  bundleTemplate: BundleTemplate = new BundleTemplate();

  constructor() {
  }

  ngOnInit() {
    this.dataSource.subscribe((bundleTemplate: BundleTemplate) => {
      if (bundleTemplate) {
        this.bundleTemplate = bundleTemplate;
      }
    });
  }

}
