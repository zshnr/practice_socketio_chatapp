var server = require('../chat');
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

	it('Should be able to post a message', function(){
		before(function(done){
			browser.
			fill('m', "Test message").
			pressButton("Send", done)
			expect(browser.text('ul')).to.eql("Test message");
		});	
	});

	it('Broadcasts a message to connected users when someone connects', function(){
		expect(browser.text('ul')).to.eql("a user connected")
	});
});
