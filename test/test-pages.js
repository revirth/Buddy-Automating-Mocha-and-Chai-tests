var expect = require("chai").expect;
var request = require("request");
describe("Status and content", function() {
  describe("Main page", function() {
    it("Main page content", function(done) {
      request("http://localhost:8080", function(error, response, body) {
        expect(body).to.equal("Hello World");
        done();
      });
    });

    it("Main page status", function(done) {
      request("http://localhost:8080", function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("About page", function() {
    it("About page content", function(done) {
      request("http://localhost:8080/about", function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});
