import { BundleTemplate } from 'src/app/bundle-template/models/bundleTemplate';

export class ProductInUseMessage {
  data: BundleTemplate[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}


