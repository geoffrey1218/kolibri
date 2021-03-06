/* eslint-env mocha */
import Vue from 'vue-test'; // eslint-disable-line
import VueRouter from 'vue-router';
import assert from 'assert';
import { mount } from 'avoriaz';
import SignUpPage from '../../src/views/sign-up-page';
import makeStore from '../util/makeStore';

function makeWrapper() {
  return mount(SignUpPage, {
    store: makeStore(),
    router: new VueRouter(),
  });
}

describe('signUpPage component', () => {
  it('smoke test', () => {
    const wrapper = makeWrapper();
    assert(wrapper.isVueComponent);
  });
});
