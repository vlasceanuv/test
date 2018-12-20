import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { ProductTemplateModule } from '../product-template/product-template.module';
import { AddBundleTemplateComponent } from './components/add-bundle-template/add-bundle-template.component';
import { DeleteBundleTemplateComponent } from './components/delete-bundle-template/delete-bundle-template.component';
import { DetailsBundleTemplateComponent } from './components/details-bundle-template/details-bundle-template.component';
import { ListBundleTemplateComponent } from './components/list-bundle-template/list-bundle-template.component';
import { BundleTemplateComponent } from './components/bundle-template/bundle-template.component';
import { BundleTemplateRoutingModule } from './bundle-template-routing.module';

@NgModule({
  declarations: [
    AddBundleTemplateComponent,
    DeleteBundleTemplateComponent,
    DetailsBundleTemplateComponent,
    ListBundleTemplateComponent,
    BundleTemplateComponent,
  ],
  imports: [
    // routing module must come before other modules
    BundleTemplateRoutingModule,
    // custom
    ProductTemplateModule,
    // angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // material
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatToolbarModule,
    MatCheckboxModule,
  ],
  exports: [],
  entryComponents: [
    AddBundleTemplateComponent,
    DeleteBundleTemplateComponent,
  ],
})
export class BundleTemplateModule {
}
