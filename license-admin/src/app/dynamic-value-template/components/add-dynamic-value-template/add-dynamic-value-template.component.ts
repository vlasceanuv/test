import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { DynamicValueTemplate } from '../../models/dynamicValueTemplate';
import { DynamicValueTemplateService } from '../../services/dynamic-value-template.service';
import { HttpErrorResponse } from '@angular/common/http';
import { GenericErrorComponent } from 'src/app/shared/components/generic-error/generic-error.component';

@Component({
  selector: 'app-add-dynamic-value-template',
  templateUrl: './add-dynamic-value-template.component.html',
  styleUrls: ['./add-dynamic-value-template.component.scss'],
})
export class AddDynamicValueTemplateComponent implements OnInit {

  formControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(public dialogRef: MatDialogRef<AddDynamicValueTemplateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DynamicValueTemplate,
              public dataService: DynamicValueTemplateService,
              public dialog: MatDialog,
              public snackBar: MatSnackBar) {
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
    this.dataService.addNewDynamicValueTemplate(this.data).subscribe((data) => {
      this.snackBar.open('Successfully added: ' + data.name, null, {
        duration: 2000,
      });
    }, (error: HttpErrorResponse) => {
      this.dialog.open(GenericErrorComponent, {
        data: error,
      });
    });
  }

  ngOnInit(): void {
  }

}
