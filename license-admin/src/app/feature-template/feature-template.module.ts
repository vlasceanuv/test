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
import { AddFeatureTemplateComponent } from './components/add-feature-template/add-feature-template.component';
import { DeleteFeatureTemplateComponent } from './components/delete-feature-template/delete-feature-template.component';
import { ErrorInuseFeatureTemplateComponent } from './components/error-inuse-feature-template/error-inuse-feature-template.component';
import { FeaturesTemplateComponent } from './components/features-template/features-template.component';
import { ListFeatureTemplateComponent } from './components/list-feature-template/list-feature-template.component';
import { FeatureTemplateRoutingModule } from './feature-template-routing.module';

@NgModule({
  declarations: [
    AddFeatureTemplateComponent,
    DeleteFeatureTemplateComponent,
    ListFeatureTemplateComponent,
    FeaturesTemplateComponent,
    ErrorInuseFeatureTemplateComponent,
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
    FeatureTemplateRoutingModule,
  ],
  exports: [
    ListFeatureTemplateComponent,
  ],
  entryComponents: [
    AddFeatureTemplateComponent,
    DeleteFeatureTemplateComponent,
    ErrorInuseFeatureTemplateComponent,
  ],
})
export class FeatureTemplateModule {
}
