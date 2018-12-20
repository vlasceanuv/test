import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BundleTemplateComponent } from './components/bundle-template/bundle-template.component';

const routes: Routes = [
  {path: '', component: BundleTemplateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BundleTemplateRoutingModule {
}
