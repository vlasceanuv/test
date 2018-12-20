import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthComponent } from './shared/components/health/health.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'features', loadChildren: './feature-template/feature-template.module#FeatureTemplateModule'},
  {path: 'dynamic-values', loadChildren: './dynamic-value-template/dynamic-value-template.module#DynamicValueTemplateModule'},
  {path: 'bundles', loadChildren: './bundle-template/bundle-template.module#BundleTemplateModule'},
  {path: 'products', loadChildren: './product-template/product-template.module#ProductTemplateModule'},
  {path: '', redirectTo: '/features', pathMatch: 'full'},
  {path: 'health', component: HealthComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
