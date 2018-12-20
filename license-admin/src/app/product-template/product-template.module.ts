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
import { DynamicValueTemplateModule } from '../dynamic-value-template/dynamic-value-template.module';
import { FeatureTemplateModule } from '../feature-template/feature-template.module';
import { AddProductTemplateComponent } from './components/add-product-template/add-product-template.component';
import { DeleteProductTemplateComponent } from './components/delete-product-template/delete-product-template.component';
import { DetailsProductTemplateComponent } from './components/details-product-template/details-product-template.component';
import { ListProductTemplateComponent } from './components/list-product-template/list-product-template.component';
import { ProductTemplateComponent } from './components/product-template/product-template.component';
import { ProductTemplateRoutingModule } from './product-template-routing.module';
import { ErrorInuseProductTemplateComponent } from './components/error-inuse-product-template/error-inuse-product-template.component';

@NgModule({
  declarations: [
    AddProductTemplateComponent,
    DeleteProductTemplateComponent,
    DetailsProductTemplateComponent,
    ListProductTemplateComponent,
    ProductTemplateComponent,
    ErrorInuseProductTemplateComponent,
  ],
  imports: [
    // routing module must come before other modules
    ProductTemplateRoutingModule,
    // custom
    DynamicValueTemplateModule,
    FeatureTemplateModule,
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
  exports: [
    ListProductTemplateComponent,
  ],
  entryComponents: [
    AddProductTemplateComponent,
    DeleteProductTemplateComponent,
    ErrorInuseProductTemplateComponent,
  ],
})
export class ProductTemplateModule {
}
