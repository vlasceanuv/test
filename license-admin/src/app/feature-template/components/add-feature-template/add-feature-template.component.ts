import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { GenericErrorComponent } from 'src/app/shared/components/generic-error/generic-error.component';
import { FeatureTemplate } from '../../models/featureTemplate';
import { FeatureTemplateService } from '../../services/feature-template.service';

@Component({
  selector: 'app-add-feature-template',
  templateUrl: './add-feature-template.component.html',
  styleUrls: ['./add-feature-template.component.scss'],
})
export class AddFeatureTemplateComponent implements OnInit {

  formControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(public dialogRef: MatDialogRef<AddFeatureTemplateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: FeatureTemplate,
              public snackBar: MatSnackBar,
              public dialog: MatDialog,
              public dataService: FeatureTemplateService) {
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.dataService.addNewFeatureTemplate(this.data).subscribe((data) => {
      this.snackBar.open('Successfully added: ' + data.code, null, {
        duration: 2000,
      });
    }, (error: HttpErrorResponse) => {
      this.dialog.open(GenericErrorComponent, {
        data: error,
      });
    });
  }

  ngOnInit() {
  }

}
