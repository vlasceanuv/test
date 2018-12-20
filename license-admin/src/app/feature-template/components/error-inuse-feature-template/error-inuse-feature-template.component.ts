import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FeatureInUseMessage } from '../../models/featureInUseMessage';

@Component({
  selector: 'app-error-inuse-feature-template',
  templateUrl: './error-inuse-feature-template.component.html',
  styleUrls: ['./error-inuse-feature-template.component.scss']
})
export class ErrorInuseFeatureTemplateComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: FeatureInUseMessage) {
  }

  ngOnInit() {
  }

}
