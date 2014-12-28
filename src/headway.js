var STYLES = require("./styles");

var PARSE_REGEX  = new RegExp("{(" + Object.keys(STYLES).join('|') + ")}", "ig");
var INDENT_REGEX = new RegExp("{indent}/", "ig");

var Headway = {
  log: function(string, newLine, addReset) {
    newLine = (typeof newLine !== 'undefined') ? newLine : true;
    addReset = addReset || true;

    if (Array.isArray(string)) {
      return this.logArray(string, newLine);
    }

    // add reset character to each string by default
    if (addReset) string = string + "{/}";

    var parsed = this.parse(string);
    // process.stdout.write flushes the stream
    newLine ? console.log(parsed) : write(parsed);
  },

  parse: function(string) {
    return string.replace(PARSE_REGEX, matchFunction)
  },

  logArray: function(arr, newLine) {
    var length = arr.length;

    for (var i = 0; i < length; i++) {
      this.log(arr[i], newLine);
    }
  },

  redisplay: function(str, numSpace) {
    numSpace = numSpace || 0;

    var space = " " * numSpace;
    write("\r" + numSpace + "\r");
    this.log(str, false);
  }
}

/*
 *  @private
 */

function write(content) {
  process.stdout.write(content.toString());
}

function newLine() {
  log("\n");
}

function matchFunction(match) {
  return "\u001b[" + STYLES[match.slice(1, -1)] + "m"
}

module.exports = Headway;
