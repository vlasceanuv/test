import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductTemplateComponent } from './components/product-template/product-template.component';

const routes: Routes = [
  {path: '', component: ProductTemplateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductTemplateRoutingModule {
}
