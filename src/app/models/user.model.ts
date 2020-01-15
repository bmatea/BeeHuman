import { Deserializable } from './deserializable.model';
import { Ad } from './ad.model';

export class User implements Deserializable {

  public id: number;
  public firstName: string;
  public lastName: string;
  public image: string;

  deserialize(input: any): this {
    Object.assign(this, input);

    return this;
  }

  getName() {
    return this.firstName + " " + this.lastName;
  }
}
