# Headway
An easier way to display styled text in the terminal.

### What about the other?
The most popular node color modules are [chalk](https://github.com/sindresorhus/chalk) and [color.js](https://github.com/marak/colors.js/).

These modules are very good and I have used them in the past but headway
takes a slightly different approach. To illustrate this, lets compare examples
of all three printing the same thing.

```js
// chalk
console.log(chalk.red(err) + chalk.yellow(": Some description string"));
// colors.js
console.log(chalk.red(err) + chalk.yellow(": Some description string"));
console.log(err.red + ": Some description string".yellow);
// headway
headway.log('{red}' + err + '{yellow}: Some description string');
```

The choice is personal preference and with short strings the benefits are slim.
Headway shines when displaying a large amount of styled text because there is no
need for manual parsing to construct the final string. Styles are declared within
the string itself.

### How
Instead of `console.log` use `hw.log` with special string formatters.

**Note: if you want to print with no newLine char use `hw.log(string, false)` instead**

``` js
var hw = require('headway');

hw.log("{_cyan_}{white}Green works{/}\n{red}And it's now it's red")

var arr = ['{black}{_yellow_}String 1', '{green}{_underline}String 2']
hw.log(arr, false);
```
![Headway example](/img/example1.png)

### Formatters

- `normal` changes the text color
- `_twoDash_` changes the background color
- `_singleDash` changes the text style (bold, underline etc)

All must be included in `{}` within the string.

### Resetting
Use one of the special reset characters `{/}` or `{reset}` to change the
all styles back to default.

You can omit this if you are just changing one style. For example, if you
are changing the text color from green to blue you can just do

```js
hw.log("{green}Green text{blue}Blue text")
```


