/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const assert = require('chai').assert;
// const app = require('../src/App');

describe('#fetchData', function () {
	it('It should return object', async function () {
		const data = await fetchData();

		data.should.have.length(1);
	});
});
