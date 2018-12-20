import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { DynamicValueTemplate } from '../../models/dynamicValueTemplate';
import { DynamicValueTemplateService } from '../../services/dynamic-value-template.service';
import { ErrorInuseDynamicValueTemplateComponent } from '../error-inuse-dynamic-value-template/error-inuse-dynamic-value-template.component';
import { GenericErrorComponent } from 'src/app/shared/components/generic-error/generic-error.component';

@Component({
  selector: 'app-delete-dynamic-value-template',
  templateUrl: './delete-dynamic-value-template.component.html',
  styleUrls: ['./delete-dynamic-value-template.component.scss'],
})
export class DeleteDynamicValueTemplateComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDynamicValueTemplateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DynamicValueTemplate,
              public dataService: DynamicValueTemplateService,
              public dialog: MatDialog,
              public snackBar: MatSnackBar) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.dataService.deleteDynamicValueTemplate(this.data).subscribe((data) => {
      this.snackBar.open('Successfully deleted: ' + data.name, null, {
        duration: 2000,
      });
    }, (error: HttpErrorResponse) => {
      if (error.error.reason === 'DYNAMIC_VALUE_IN_USE') {
        this.dialog.open(ErrorInuseDynamicValueTemplateComponent, {
          data: error.error,
        });
      } else {
        this.dialog.open(GenericErrorComponent, {
          data: error,
        });
      }
    });
  }

  ngOnInit() {
  }

}
