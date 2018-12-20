import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicValueTemplatesComponent } from './components/dynamic-value-templates/dynamic-value-templates.component';

const routes: Routes = [
  {path: '', component: DynamicValueTemplatesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicValueTemplateRoutingModule {
}
