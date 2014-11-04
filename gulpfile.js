var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var files = ['index.js', 'lib/*.js'];

gulp.task('default', function () {
  return gulp.src(files)
    .pipe(plugins.jscs())
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function () {
  gulp.start('default');

  gulp.watch(files, ['default']);
});
