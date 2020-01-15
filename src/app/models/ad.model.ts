import { Deserializable } from './deserializable.model';

export class Ad implements Deserializable {

  public id: number;
  public title: string;
  public author: number;
  public description: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }


}
