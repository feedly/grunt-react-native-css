/*
 * grunt-react-native-css
 * https://github.com/alexmick/grunt-react-native-css
 *
 * Copyright (c) 2016 Alexander Micklewright
 * Licensed under the MIT license.
 */

'use strict';

var RNC = require('react-native-css');
var temp = require('tmp');
var path = require('path');

module.exports = function(grunt) {

  grunt.registerMultiTask('react_native_css', 'A wrapper for react-native-css', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      pretty: false,
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.linefeed);

      var tmpfile = temp.fileSync({
        postfix : '.scss',
      });

      // Write to temp file.
      grunt.file.write(tmpfile.name, src);

      // Check destination exists
      if (!grunt.file.exists(path.dirname(f.dest))) {
        grunt.file.mkdir(path.dirname(f.dest));
      }

      var rncss = new RNC();
      rncss.parse(tmpfile.name, f.dest, options.pretty, function (css) {
        grunt.log.writeln('File "' + f.dest + '" created');
      });
    });
  });

};
