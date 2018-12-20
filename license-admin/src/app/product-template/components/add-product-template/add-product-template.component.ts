import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { ListDynamicValueTemplateComponent } from 'src/app/dynamic-value-template/components/list-dynamic-value-template/list-dynamic-value-template.component';
import { ListFeatureTemplateComponent } from 'src/app/feature-template/components/list-feature-template/list-feature-template.component';
import { ProductTemplate } from '../../models/productTemplate';
import { ProductTemplateService } from '../../services/product-template.service';
import { HttpErrorResponse } from '@angular/common/http';
import { GenericErrorComponent } from 'src/app/shared/components/generic-error/generic-error.component';

@Component({
  selector: 'app-add-product-template',
  templateUrl: './add-product-template.component.html',
  styleUrls: ['./add-product-template.component.scss']
})
export class AddProductTemplateComponent implements OnInit {
  formControl = new FormControl('', [
    Validators.required,
  ]);

  productInfoGroup: FormGroup;
  featuresGroup: FormGroup;
  dynamicValuesGroup: FormGroup;
  reviewGroup: FormGroup;

  @ViewChild(ListFeatureTemplateComponent) featuresListComponent: ListFeatureTemplateComponent;
  @ViewChild(ListDynamicValueTemplateComponent) dynamicValueListComponent: ListDynamicValueTemplateComponent;

  constructor(public dialogRef: MatDialogRef<AddProductTemplateComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private _formBuilder: FormBuilder,
              public snackBar: MatSnackBar,
              public dialog: MatDialog,
              public dataService: ProductTemplateService) {
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.productInfoGroup = this._formBuilder.group({
      name: [this.data.productTemplate.name, Validators.required],
      code: [this.data.productTemplate.code, Validators.required],
      description: [this.data.productTemplate.description],
    });
    this.featuresGroup = this._formBuilder.group({});
    this.dynamicValuesGroup = this._formBuilder.group({});
    this.reviewGroup = this._formBuilder.group({});
  }

  addProduct(): void {
    const productTemplate: ProductTemplate = this.data.productTemplate;
    productTemplate.name = this.productInfoGroup.value.name;
    productTemplate.code = this.productInfoGroup.value.code;
    productTemplate.description = this.productInfoGroup.value.description;
    productTemplate.featureTemplateDtos = this.featuresListComponent.selection.selected;
    productTemplate.dynamicValueTemplateDtos = this.dynamicValueListComponent.selection.selected;
    this.dataService.addNewProductTemplate(productTemplate).subscribe((data) => {
      this.snackBar.open('Successfully added product: ' + data.name, null, {
        duration: 2000,
      });
    }, (error: HttpErrorResponse) => {
      this.dialog.open(GenericErrorComponent, {
        data: error,
      });
    });
    this.dialogRef.close();
  }

}
