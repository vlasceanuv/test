import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatIconModule, MatListModule } from '@angular/material';
import { GenericErrorComponent } from './components/generic-error/generic-error.component';

@NgModule({
  declarations: [GenericErrorComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  entryComponents: [
    GenericErrorComponent,
  ],
  exports: [
    GenericErrorComponent,
  ],
})
export class SharedModule {
}
