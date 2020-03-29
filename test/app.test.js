import { shallow } from 'enzyme';
import App from '/app';

describe('App', () => {
  it('renders app', () => {
    let wrapper = shallow(<App/>)
    console.log(wrapper)
  });
});
