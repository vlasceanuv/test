import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesTemplateComponent } from './components/features-template/features-template.component';

const routes: Routes = [
  {path: '', component: FeaturesTemplateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureTemplateRoutingModule {
}
