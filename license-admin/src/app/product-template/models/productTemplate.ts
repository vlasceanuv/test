import { DynamicValueTemplate } from 'src/app/dynamic-value-template/models/dynamicValueTemplate';
import { FeatureTemplate } from 'src/app/feature-template/models/featureTemplate';

export class ProductTemplate {
  id: string;
  code: string;
  name: string;
  description: string;
  featureTemplateDtos: FeatureTemplate[];
  dynamicValueTemplateDtos: DynamicValueTemplate[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
