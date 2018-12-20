import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { ProductTemplate } from '../../models/productTemplate';
import { ProductTemplateService } from '../../services/product-template.service';
import { ErrorInuseProductTemplateComponent } from '../error-inuse-product-template/error-inuse-product-template.component';
import { HttpErrorResponse } from '@angular/common/http';
import { GenericErrorComponent } from 'src/app/shared/components/generic-error/generic-error.component';

@Component({
  selector: 'app-delete-product-template',
  templateUrl: './delete-product-template.component.html',
  styleUrls: ['./delete-product-template.component.scss']
})
export class DeleteProductTemplateComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteProductTemplateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductTemplate,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    private dataService: ProductTemplateService) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.dataService.deleteProductTemplate(this.data).subscribe((data) => {
      this.snackBar.open('Successfully deleted product: ' + data.name);
    }, (error: HttpErrorResponse) => {
      if (error.error.reason === 'PRODUCT_IN_USE') {
        this.dialog.open(ErrorInuseProductTemplateComponent, {
          data: error.error,
        });
      } else {
        this.dialog.open(GenericErrorComponent, {
          data: error,
        });
      }
    });
  }
}
