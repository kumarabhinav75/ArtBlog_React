import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Main from './index';

describe(' Main ', () => {
  it ('should match the snapshot', () => {
    const tree = renderer.create(<Main />);
    expect(tree).toMatchSnapshot();
  });

  it('Should call componentDidMount once', async () => {
    const wrapper = shallow(<Main />);
    const spy = jest.spyOn(wrapper.instance(),'componentDidMount');
    const didMount = wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
    expect(wrapper.instance().state.cardJSON).toEqual(['a']);
  });
})