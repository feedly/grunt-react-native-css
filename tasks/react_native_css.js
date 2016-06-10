/*
 * grunt-react-native-css
 * https://github.com/feedly/grunt-react-native-css
 *
 * Copyright (c) 2016 devHD
 * Licensed under the MIT license.
 */

'use strict';

var RNC = require('react-native-css');
var path = require('path');

module.exports = function(grunt) {

  grunt.registerMultiTask('react_native_css', 'A wrapper for react-native-css', function() {
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      pretty: false,
      literal: false,
    });

    var files = this.files.slice();

    function process() {
      if(files.length <= 0) {
        done();
        return;
      }

      var f = files.pop();

      if (f.src.length > 1) {
        grunt.warn(
          'Due to limitation in react-native-css, output files are limited to one source file at a time.' +
          ' Make multiple output files with one source file each.'
        );
      }

      // Check destination exists
      if (!grunt.file.exists(path.dirname(f.dest))) {
        grunt.file.mkdir(path.dirname(f.dest));
      }

      var rncss = new RNC();
      rncss.parse(f.src[0], f.dest, options.pretty, options.literal, function () {
        grunt.log.writeln('File "' + f.dest + '" created');
        process();
      });
    }

    process();

  });
};
