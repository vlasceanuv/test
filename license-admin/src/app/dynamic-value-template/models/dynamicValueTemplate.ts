export class DynamicValueTemplate {
  id: string;
  code: string;
  name: string;
  description: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
