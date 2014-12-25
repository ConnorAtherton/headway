var STYLES = require("./styles");

var PARSE_REGEX  = new RegExp("{(" + Object.keys(STYLES).join('|') + ")}", "ig");
var INDENT_REGEX = new RegExp("\[indent\]/", "ig");

var Headway = {
  display: function(string) {
    var parsed = this.parse(string);
    // process.stdout.write flushes the stream
    log(parse);
  },

  parse: function(string) {
    return string.replace(PARSE_REGEX, matchFunction)
  },

  redisplay: function() {
    this.display()
  }

}

/*
 *  @private
 */

function log(content) {
  process.stdout.write(content.toString());
}

function newLine() {
  log("\n");
}

function matchFunction(match) {
  return "\u001b[" + STYLES[match.slice(1, -1)] + "m"
}

var res = Headway.parse("{_cyan_}{white}Green works{/}\n{red}And it's now it's red{/}")

console.log(res);


module.exports = Headway;
