var hw = require('../src/headway.js');

describe("Headway tests", function() {

  var color = "{blue}Blue String";
  var style = "{_underline}Underline String";
  var background = "{_cyan_}Cyan Background";

  it("Should change text color", function() {
    var correctParsed = "\u001b[34mBlue String";
    var parsed = hw.parse(color);

    return parsed === correctParsed;
  });

  it("Should change text style", function() {
    var correctParsed = "\u001b[4mUnderline String";
    var parsed = hw.parse(style);

    return parsed === correctParsed;
  });

  it("Should change background color", function() {
    var correctParsed = "\u001b[46mUnderline String";
    var parsed = hw.parse(background);

    return parsed === correctParsed;
  });
});
