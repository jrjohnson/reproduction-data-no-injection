import Model, { attr } from '@ember-data/model';

export default class DogModel extends Model {
  @attr name;
}
