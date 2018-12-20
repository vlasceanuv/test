import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { BundleTemplate } from '../../models/bundleTemplate';
import { BundleTemplateService } from '../../services/bundle-template.service';
import { GenericErrorComponent } from 'src/app/shared/components/generic-error/generic-error.component';

@Component({
  selector: 'app-delete-bundle-template',
  templateUrl: './delete-bundle-template.component.html',
  styleUrls: ['./delete-bundle-template.component.scss']
})
export class DeleteBundleTemplateComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteBundleTemplateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BundleTemplate,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    private dataService: BundleTemplateService) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.dataService.deleteBundleTemplate(this.data).subscribe((data) => {
      this.snackBar.open('Successfully deleted bundle: ' + data.name);
    }, (error) => {
      // TODO in-use errors - when subscription is ready
      this.dialog.open(GenericErrorComponent, {
        data: error,
      });
    });
  }
}
