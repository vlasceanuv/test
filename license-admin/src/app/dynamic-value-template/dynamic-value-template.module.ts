import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatToolbarModule,
} from '@angular/material';
import { AddDynamicValueTemplateComponent } from './components/add-dynamic-value-template/add-dynamic-value-template.component';
import { DeleteDynamicValueTemplateComponent } from './components/delete-dynamic-value-template/delete-dynamic-value-template.component';
import { DynamicValueTemplatesComponent } from './components/dynamic-value-templates/dynamic-value-templates.component';
import { ErrorInuseDynamicValueTemplateComponent } from './components/error-inuse-dynamic-value-template/error-inuse-dynamic-value-template.component';
import { ListDynamicValueTemplateComponent } from './components/list-dynamic-value-template/list-dynamic-value-template.component';
import { DynamicValueTemplateRoutingModule } from './dynamic-value-template-routing.module';

@NgModule({
  declarations: [
    DynamicValueTemplatesComponent,
    AddDynamicValueTemplateComponent,
    DeleteDynamicValueTemplateComponent,
    ListDynamicValueTemplateComponent,
    ErrorInuseDynamicValueTemplateComponent,
  ],
  imports: [
    MatButtonModule,
    // angular material
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatToolbarModule,
    MatCheckboxModule,
    // angular
    CommonModule,
    FormsModule,
    // custom
    DynamicValueTemplateRoutingModule,
  ],
  entryComponents: [
    DeleteDynamicValueTemplateComponent,
    AddDynamicValueTemplateComponent,
    ErrorInuseDynamicValueTemplateComponent,
  ],
  exports: [
    ListDynamicValueTemplateComponent,
  ],
})
export class DynamicValueTemplateModule {
}
