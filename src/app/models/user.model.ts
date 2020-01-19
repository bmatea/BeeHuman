import { Deserializable } from './deserializable.model';
import { Ad } from './ad.model';

export class User implements Deserializable {

  public id: string;
  public name: string;
  public surname: string;
  public image: string;

  deserialize(input: any): this {
    Object.assign(this, input);

    return this;
  }

  getName() {
    return this.name + " " + this.surname;
  }
}
