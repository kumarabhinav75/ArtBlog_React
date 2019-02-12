import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Footer from './index';

describe('Header', () => {
  it ('should match the snapshot', () => {
    const tree = renderer.create(<Footer />);
    expect(tree).toMatchSnapshot();
  });
})