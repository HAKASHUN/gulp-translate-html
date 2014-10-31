# gulp-translate-html
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> translate-html plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-translate-html` as a development dependency:

```shell
npm install --save-dev gulp-translate-html
```

Then, add it to your `gulpfile.js`:

```javascript
var translate-html = require("gulp-translate-html");

gulp.src("./src/*.html")
	.pipe(translate-html({
		messages: {
          "name": "Taro Yamada"
	    }
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### translate-html(options)

#### options.messages
Type: `String | Object`  

Your Messages Object or file path.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-translate-html
[npm-image]: https://badge.fury.io/js/gulp-translate-html.png

[travis-url]: http://travis-ci.org/HAKASHUN/gulp-translate-html
[travis-image]: https://secure.travis-ci.org/HAKASHUN/gulp-translate-html.png?branch=master

[coveralls-url]: https://coveralls.io/r/HAKASHUN/gulp-translate-html
[coveralls-image]: https://coveralls.io/repos/HAKASHUN/gulp-translate-html/badge.png

[depstat-url]: https://david-dm.org/HAKASHUN/gulp-translate-html
[depstat-image]: https://david-dm.org/HAKASHUN/gulp-translate-html.png
