import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { FeatureTemplate } from '../../models/featureTemplate';
import { FeatureTemplateService } from '../../services/feature-template.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorInuseFeatureTemplateComponent } from '../error-inuse-feature-template/error-inuse-feature-template.component';
import { GenericErrorComponent } from 'src/app/shared/components/generic-error/generic-error.component';

@Component({
  selector: 'app-delete-feature-template',
  templateUrl: './delete-feature-template.component.html',
  styleUrls: ['./delete-feature-template.component.scss'],
})
export class DeleteFeatureTemplateComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteFeatureTemplateComponent>,
              public dialog: MatDialog,
              public snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: FeatureTemplate, public dataService: FeatureTemplateService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.dataService.deleteFeatureTemplate(this.data).subscribe((data) => {
        this.snackBar.open('Successfully deleted: ' + this.data.code);
      }, (error: HttpErrorResponse) => {
        if (error.error.reason == 'FEATURE_IN_USE') {
          this.dialog.open(ErrorInuseFeatureTemplateComponent, {
            data: error.error,
          });
        } else {
          this.dialog.open(GenericErrorComponent, {
            data: error,
          });
        }
      }
    );
  }

  ngOnInit() {
  }

}
