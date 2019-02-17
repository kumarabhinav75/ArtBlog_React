import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Main from './index';

describe(' Main ', () => {
  it ('should match the snapshot', () => {
    const tree = renderer.create(<Main />);
    expect(tree).toMatchSnapshot();
  });

  it('Should call componentDidMount once', async (done) => {
    const wrapper = shallow(<Main />);
    expect(wrapper.instance().state.cardJSON.length).toEqual(0);
    await wrapper.instance().componentDidMount();
    // console.log(wrapper.instance());
    expect(wrapper.instance().state.cardJSON.length).toEqual(6);
    done();
  });
})