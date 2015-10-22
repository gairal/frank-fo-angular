var conf = require('../config.json');
var pkg = require('../../package.json');
var gulp = require('gulp');
var replace = require('gulp-replace');
var jshint = require('gulp-jshint');
var minimist = require('minimist');

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

gulp.task('js:build', function() {
  gulp.src([conf.base.src + conf.files.js])
    .pipe(replace('@@env', options.env))
    .pipe(replace('@@appName', pkg.name))
    .pipe(replace('@@appVersion', pkg.version))
    .pipe(replace('@@apiUrl', apiUrl))
    .pipe(replace('@@staticUrl', staticUrl))
    .pipe(jshint('./gulp/.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest(conf.base.build));
});