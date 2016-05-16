import 'babel-polyfill';
import NotFound from '../src';
import React from 'react';
import chai from 'chai';
chai.should();
describe('NotFound', () => {
  it('is compatible with React.Component', () => {
    NotFound.should.be.a('function');
  });

  it('renders a React element', () => {
    React.isValidElement(<NotFound />).should.equal(true);
  });

});
