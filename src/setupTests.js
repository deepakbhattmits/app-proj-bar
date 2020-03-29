/** @format */

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// setup test
Enzyme.configure({
	adapter: new EnzymeAdapter(),
	disableLifecycleMethods: true
});
