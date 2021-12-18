import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
// @components
import App from '../src/App';
import Main from '../src/components/Main/Main';
import Adapter from 'enzyme-adapter-react-16';
import NavBar from '../src/components/NavBar/NavBar';

configure({ adapter: new Adapter() });

// eslint-disable-next-line no-undef
describe('<App/>', () => {
	// eslint-disable-next-line no-undef
	it('Should render ', () => {
		const wrapper = shallow(<NavBar />);
		expect(wrapper.find('img')).to.have.length(1);
	});
	// eslint-disable-next-line no-undef
	it('Should render the child component', () => {
		const wrapper = shallow(<App />);
		console.log('wrapper', wrapper);
		// expect(wrapper.find(Main).to.have.length(1));
	});

	// eslint-disable-next-line no-undef
	it('Should render the child component', () => {
		const wrapper = shallow(<Main />);
		console.log('wrapper', wrapper);
		// expect(wrapper.find(Awards).to.have.length(1));
	});
});
