# grunt-react-native-css [![Build Status](https://travis-ci.org/alexmick/grunt-react-native-css.svg?branch=master)](https://travis-ci.org/alexmick/grunt-react-native-css) [![npm](https://img.shields.io/npm/dt/grunt-react-native-css.svg)](https://www.npmjs.com/package/grunt-react-native-css)

> A wrapper for react-native-css, a css to react-native StyleSheet Syntax by [@sabeurthabti](https://github.com/sabeurthabti/react-native-css) :clap:

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-react-native-css --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-react-native-css');
```

## The "react_native_css" task

### Overview
In your project's Gruntfile, add a section named `react_native_css` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  react_native_css: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.pretty
Type: `Boolean`
Default value: `false`

Passes the `--pretty` option to react-native-css which outputs a multiline js StyleSheet file.

#### options.literal
Type: `Boolean`
Default value: `false`

Passes the `--literal` option to react-native-css which outputs a simple js object instead of a StyleSheet.create() object.


### Usage Example

```js
grunt.initConfig({
  react_native_css: {
    default_options: {
      options: {},
      files: {
        'dest/style.js': ['src/style.css', 'src/vars.css'],
      },
    },
  },
});
```


### About watching

This plugin does not wrap the use of the `-w` flag for _react-native-css_ because grunt has it's own file watcher under the hood. Just install :

```shell
npm install grunt-contrib-watch --save-dev
```

Add the task to you GruntFile

```js
grunt.loadNpmTasks('grunt-contrib-watch');
```

And tell watch to fire the `react_native_css` task on file changes

```js
watch: {
  react_native_css: {
    files: ['**/*.css', '**/*.scss'],
    tasks: ['react_native_css'],
    options: {
      interrupt: true,
    },
  },
}
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

### V 0.1.6 Documentation update

### V 0.1.5 Support react-native-css --literal flag

Option literal now supported as added in https://github.com/sabeurthabti/react-native-css/pull/29

### V 0.1.4 react-native-css source update

Use the official `react-native-css` instead of personal fork

### V 0.1.3 Async update

Improve reliability of async task

### V 0.1.1 Initial Release

Integrates with [alexmick/react-native-css](https://github.com/alexmick/react-native-css), waiting for PR [#28](https://github.com/sabeurthabti/react-native-css/pull/28) to switch to official npm module

