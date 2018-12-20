import { ProductTemplate } from 'src/app/product-template/models/productTemplate';

export class BundleTemplate {
  id: string;
  name: string;
  description: string;
  licenseModel: string;
  productTemplateDtos: ProductTemplate[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
