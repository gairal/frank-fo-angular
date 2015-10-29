var conf = require('../config.json');
var gulp = require('gulp');
var ftp = require('vinyl-ftp');
var prompt = require('gulp-prompt');
var minimist = require('minimist');
var runSequence = require('run-sequence');

var knownOptions = {
  string: 'env',
  default: {env: 'local'}
};
var options = minimist(process.argv.slice(2), knownOptions);
var host = 'ftp.gairal.com', src, dest;

switch(options.env) {
    case 'prod':
        dest = '/www/frank/prod';
        break;
    default:
        dest = '/www/frank/staging';
        break;
}

gulp.task('ftp', function() {
    return gulp.src('.')
    .pipe(prompt.prompt([{
        type: 'input',
        name: 'user',
        message: 'Enter ftp user'
    },
    {
        type: 'password',
        name: 'pass',
        message: 'Enter ftp password'
    }]
    ,function(res){
        var conn = ftp.create({
            host: host,
            user: res.user,
            pass: res.pass,
            parallel: 10
        });
        gulp.src(src)
        .pipe(conn.newer(dest))
        .pipe(conn.dest(dest))
        .on('error', function(err) {
            console.log(err);
        });
    }));
});

gulp.task('deploy:build', function (cb){
    src = [conf.base.build + '/**/*', conf.base.build + '/.*'];
    runSequence('build', 'ftp', cb);
});

gulp.task('deploy:compile', function (cb){
    src = [conf.base.compile + '/**/*', conf.base.compile + '/.*'];
    runSequence('compile', 'ftp', cb);
});