# angular-regex
VerbalExpressions is a Angular library that helps to construct difficult regular expressions.




[![Build Status](https://travis-ci.org/previousdeveloper/angular-regex.svg?branch=master)](https://travis-ci.org/previousdeveloper/angular-regex) [![Coverage Status](https://coveralls.io/repos/previousdeveloper/angular-regex/badge.svg?branch=master&service=github)](https://coveralls.io/github/previousdeveloper/angular-regex?branch=master)


## Install

Install with Bower or download the the files directly from the dist folder in the repo.

```bash
bower install angular-regex
```

Add `dist/angular-regex.service.min.js`  index.html.

Add `regex` as a module dependency for your module.

Then inject and use the `regexService` service.


## Examples

Here's a couple of simple examples to give an idea of how VerbalExpressions works:

### Testing if we have a valid URL

```javascript
// Create an example of how to test for correctly formed URLs
function myController($scope,regexService){  // <-- Inject regexService

var tester = regexService.ex()
    .startOfLine()
    .then('http')
    .maybe('s')
    .then('://')
    .maybe('www.')
    .anythingBut(' ')
    .endOfLine();

// Create an example URL
var testMe = 'https://www.google.com';

// Use RegExp object's native test() function
if (tester.test(testMe)) {
    alert('We have a correct URL '); // This output will fire}
} else {
    alert('The URL is incorrect');
}

console.log(tester); // Outputs the actual expression used: /^(http)(s)?(\:\/\/)(www\.)?([^\ ]*)$/
```

### Replacing strings

```javascript
// Create a test string
var replaceMe = 'Replace bird with a duck';

// Create an expression that seeks for word "bird"
var expression = regexService.ex().find('bird');

// Execute the expression like a normal RegExp object
var result = expression.replace(replaceMe, 'duck');

// Outputs "Replace duck with a duck"
alert(result);
```

### Shorthand for string replace:

```javascript
var result = regexService.ex().find('red').replace('We have a red house', 'blue');

// Outputs "We have a blue house"
alert(result);
```

## API documentation

You can find the API documentation at the [wiki pages](https://github.com/VerbalExpressions/JSVerbalExpressions/wiki).

## A little word for a big help
I'd like to promote a special thank-you to [Ben Nadel][ben-nadel] for his [great article about extending native JS objects][extending]

## Contributions
Clone the repo and fork:
`git clone https://github.com/jehna/VerbalExpressions.git`.

### Style guide

The [Airbnb](https://github.com/airbnb/javascript) style guide is loosely used as a basis for creating clean and readable JavaScript code.

Pull requests are warmly welcome!

Check out these slide decks for handy Github & git tips:
- [Git and Github Secrets](http://zachholman.com/talk/git-github-secrets/)
- [More Git and Github Secrets](http://zachholman.com/talk/more-git-and-github-secrets/)

[ben-nadel]:http://www.bennadel.com/
[extending]:http://www.bennadel.com/blog/2292-extending-javascript-arrays-while-keeping-native-bracket-notation-functionality.htm
