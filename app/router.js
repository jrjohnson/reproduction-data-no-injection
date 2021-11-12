import EmberRouter from '@ember/routing/router';
import config from 'test-data-no-injection/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('dog', { path: 'dogs/:dog_id' });
  this.route('dogos', { path: 'dogos/:dog_id' });
});
