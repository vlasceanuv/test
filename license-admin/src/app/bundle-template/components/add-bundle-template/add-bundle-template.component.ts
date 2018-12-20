import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { ListProductTemplateComponent } from 'src/app/product-template/components/list-product-template/list-product-template.component';
import { BundleTemplate } from '../../models/bundleTemplate';
import { BundleTemplateService } from '../../services/bundle-template.service';
import { HttpErrorResponse } from '@angular/common/http';
import { GenericErrorComponent } from 'src/app/shared/components/generic-error/generic-error.component';

@Component({
  selector: 'app-add-bundle-template',
  templateUrl: './add-bundle-template.component.html',
  styleUrls: ['./add-bundle-template.component.scss']
})
export class AddBundleTemplateComponent implements OnInit {
  formControl = new FormControl('', [
    Validators.required,
  ]);

  bundleInfoGroup: FormGroup;
  productsGroup: FormGroup;
  reviewGroup: FormGroup;
  selectedLicenseModel: string;

  @ViewChild(ListProductTemplateComponent) productListComponent: ListProductTemplateComponent;

  constructor(public dialogRef: MatDialogRef<AddBundleTemplateComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private _formBuilder: FormBuilder,
              public snackBar: MatSnackBar,
              public dialog: MatDialog,
              public dataService: BundleTemplateService) {
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
    this.bundleInfoGroup = this._formBuilder.group({
      name: [this.data.bundleTemplate.name, Validators.required],
      description: [this.data.bundleTemplate.description],
      licenseModel: [this.data.bundleTemplate.licenseModel],
    });
    this.productsGroup = this._formBuilder.group({});
    this.reviewGroup = this._formBuilder.group({});

  }

  addBundle(): void {
    const bundleTemplate: BundleTemplate = this.data.bundleTemplate;
    bundleTemplate.name = this.bundleInfoGroup.value.name;
    bundleTemplate.description = this.bundleInfoGroup.value.description;
    bundleTemplate.licenseModel = this.selectedLicenseModel;

    bundleTemplate.productTemplateDtos = this.productListComponent.selection.selected;
    this.dataService.addNewBundleTemplate(bundleTemplate).subscribe((data) => {
      this.snackBar.open('Successfully added bundle: ' + data.name, null, {
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
