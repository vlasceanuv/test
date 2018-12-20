import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DynamicValueInUseMessage } from '../../models/dynamicValueInUseMessage';

@Component({
  selector: 'app-error-inuse-dynamic-value-template',
  templateUrl: './error-inuse-dynamic-value-template.component.html',
  styleUrls: ['./error-inuse-dynamic-value-template.component.scss']
})
export class ErrorInuseDynamicValueTemplateComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DynamicValueInUseMessage) {
  }

  ngOnInit() {
  }

}
