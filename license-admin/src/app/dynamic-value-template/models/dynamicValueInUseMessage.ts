import { ProductTemplate } from 'src/app/product-template/models/productTemplate';

export class DynamicValueInUseMessage {
  data: ProductTemplate[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}


