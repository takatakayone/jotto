import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input from './Input';

const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  return wrapper;
};

describe('render', () => {
 describe('word has not been guessed', () => {
    test('renders component without error', () => {

    });
    test('does not renders input box', () => {

    });
    test('does not render submit button', () => {

    });
 });

 describe('word has been guessed', () => {

 });


});

describe('update state', () => {

});

