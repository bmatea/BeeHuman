import { Deserializable } from './deserializable.model';


export class BlogPost implements Deserializable {

  public id: string;
  public title: string;
  public subtitle: string;
  public description: string;
  public image: string;

  deserialize(input: any): this {
    Object.assign(this, input);

    return this;
  }

}
