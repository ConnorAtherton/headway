# Headway
An easier way to display styled text in the terminal.

### How
Instead of `console.log` use `hw.log` with special string formatters.

``` js
var hw = require('headway');

hw.log("{_cyan_}{white}Green works{/}\n{red}And it's now it's red")

var arr = ['{black}{_yellow_}String 1', '{green}{_underline}String 2']
hw.log(arr);
```
![Headway example](/img/example1.png)

### Formatters

- `normal` changes the text color
- `_twoDash_` changes the background color
- `_singleDash` changes the text style (bold, underline etc)

All must be included in `{}` within the string.

### Resetting
Use one of the special reset characters `{/}` or `{reset}` to change the
styles back to default.


