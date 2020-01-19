import { Deserializable } from './deserializable.model';

export class Ad implements Deserializable {

  public id: string;
  public title: string;
  public author: string;
  public description: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }


}
