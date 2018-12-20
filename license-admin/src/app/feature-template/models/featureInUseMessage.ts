import { ProductTemplate } from 'src/app/product-template/models/productTemplate';

export class FeatureInUseMessage {
  data: ProductTemplate[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
  

