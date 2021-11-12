import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | dogs', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.server.create('dog', {
      name: 'Jasper',
    });
  });

  test('visiting dogs', async function (assert) {
    await visit('/dogs/1');

    assert.equal(currentURL(), '/dogs/1');
    assert.dom().containsText('Jasper');
  });

  test('visiting dogos', async function (assert) {
    await visit('/dogos/1');

    assert.equal(currentURL(), '/dogos/1');
    assert.dom().containsText('Jasper');
  });
});
