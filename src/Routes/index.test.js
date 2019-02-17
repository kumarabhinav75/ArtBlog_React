import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Routing from './index';
import { MemoryRouter } from 'react-router'
import App from '../Components/Main';
import CreatePost from '../Components/NewPost';

const reactRouterDom = require('react-router-dom');

reactRouterDom.BrowserRouter = ({children}) => <div>{children}</div>



describe ('Route', () => {
  it ('Should match shallow snapshot?', () => {
    const wrapper = shallow(<Routing />);
    expect(wrapper).toMatchSnapshot();
  });
  it (' should redirect to Homepage for /', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Routing />
      </MemoryRouter>
    );
    expect(wrapper.find(App)).toHaveLength(1);
  });
  it (' should redirect to Create post for /posts', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/posts']}>
        <Routing />
      </MemoryRouter>
    );
    console.log(wrapper.find(CreatePost));
    expect(wrapper.find(CreatePost)).toHaveLength(1);
  });
})