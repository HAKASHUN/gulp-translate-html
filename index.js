var through = require("through2"),
	gutil = require("gulp-util"),
	_ = require("lodash");

module.exports = function (options) {
	"use strict";

	// if necessary check for required options(s), e.g. options hash, etc.
	if (!options) {
		throw new gutil.PluginError("gulp-translate-html", "No options supplied");
	}

	// delimiters setting
	if(options.templateSettings) {
		_.assign(_.templateSettings, options.templateSettings);
	}

	/**
	 * compile html file with object
	 * @param  {Object} file input file
	 * @return {Object} compiled Template Object
	 */
	function compiler(file) {
		var compiled = _.template(file.contents);
		return compiled(options.messages);
	}

	// see "Writing a plugin"
	// https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md
	function translateHtml(file, enc, callback) {
		/*jshint validthis:true*/


		// Do nothing if no contents
		if (file.isNull()) {
			this.push(file);
			return callback();
		}

		if (file.isStream()) {

			// http://nodejs.org/api/stream.html
			// http://nodejs.org/api/child_process.html
			// https://github.com/dominictarr/event-stream

			// accepting streams is optional
			this.emit("error",
				new gutil.PluginError("gulp-translate-html", "Stream content is not supported"));
			return callback();
		}

		// check if file.contents is a `Buffer`
		if (file.isBuffer()) {
			var compiled = compiler(file);

			// manipulate buffer in some way
			// http://nodejs.org/api/buffer.html
			file.contents = new Buffer(compiled);
			this.push(file);

		}
		return callback();
	}

	return through.obj(translateHtml);
};
