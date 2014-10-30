var server = require('../index');
var expect = require('expect.js');
var Browser = require('zombie');

describe('Socket IO Chat App', function(){
	var browser;
	before(function(){
		this.server = server.listen(3000);	
	browser = new Browser({site: 'http://localhost:3000'});
	});

	before(function(done){
		browser.visit('/', done);
	});

	it('Should show a header', function(){
		expect(browser.text('h1')).to.eql("Welcome to Socket Chat");
	});
});
