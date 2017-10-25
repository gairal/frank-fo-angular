var conf = require('../config.json');
var pkg = require('../../package.json');
var gulp = require('gulp');
var replace = require('gulp-replace');
var minimist = require('minimist');
var eslint = require('gulp-eslint');
const runSequence = require('run-sequence');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

var knownOptions = {
  string: 'env',
  default: {env: 'local'}
};
var options = minimist(process.argv.slice(2), knownOptions);
var apiUrl, staticUrl;

switch(options.env) {
    case 'prod':
        apiUrl = conf.env.prod.api_url;
        staticUrl = conf.env.prod.static_url;
        break;
    case 'dev':
        apiUrl = conf.env.dev.api_url;
        staticUrl = conf.env.prod.static_url;
        break;
    case 'mock':
        apiUrl = conf.env.mock.api_url;
        staticUrl = conf.env.prod.static_url;
        break;
    default:
        apiUrl = conf.env.dev.api_url;
        staticUrl = conf.env.prod.static_url;
        break;
}

gulp.task('js:lint', function() {
  'use strict';
  return gulp.src([conf.base.src + conf.files.js])
    .pipe(eslint({configFile: './.eslintrc.json'}))
    .pipe(eslint.format());
});

gulp.task('js:build', function(cb) {
  'use strict';
  return runSequence(['js:lint', 'js:any:build'], cb);
});

gulp.task('js:any:build', function() {
  'use strict';
  return gulp.src([conf.base.src + conf.files.js])
  .pipe(replace('@@env', options.env))
  .pipe(replace('@@appName', pkg.name))
  .pipe(replace('@@appVersion', pkg.version))
  .pipe(replace('@@apiUrl', apiUrl))
  .pipe(replace('@@staticUrl', staticUrl))
  .on('error', handleError)
  .pipe(gulp.dest(conf.base.build));
});
