import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Card from './index';

describe(Card, () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Card />);
    expect(tree).toMatchSnapshot();
  });

  it('should increment clapcount on click', () => {
    const wrapper = shallow(<Card claps={10} />);
    wrapper.instance().incrementClaps();
    expect(wrapper.instance().state.clapCount).toEqual(11);
    // console.log(wrapper.instance());
  });

  it('Should toggle inverse like', ()=> {
    const wrapper = shallow(<Card liked={true} />);
    wrapper.instance().toggleLike();
    expect(wrapper.instance().state.liked).toEqual(false);
  });
});