var assert = require('assert');

var rs = require('../');


describe("check generated random string lengths", function () {

  it("should default to 10 ", function() {
      assert(rs.generate().length, 10);
  });

  it("should generate length provided ", function() {
      var length = 6;
      assert(rs.generate(length).length, length);
  });

  it("invalid length as parameter .. fails to generate", function() {

      assert(function() { rs.generate("afew"); }, Error, "invalid options provided");
  });


});
