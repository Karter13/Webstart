let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');



gulp.task('minify-css', function (done) {
  return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/css/'))
  done();
});

gulp.task('move-js', function (done) {
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('dist/js/'))
  done();
});

gulp.task('htmlmin', function (done) {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'))
  done();
});

gulp.task('fonts', function (done) {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
  done();
});

gulp.task('tinypng', function (done) {
  gulp.src('./src/img/**/*.{png,jpg,jpeg}')
    .pipe(tinypng({
      key: 'kxnBPt824r2Vb5PSNL38xbPZHsdPY4Ld '
    }))
    .pipe(gulp.dest('dist/img/'));
  done();
});


gulp.task('default', gulp.parallel('minify-css', 'move-js', 'fonts', 'htmlmin', 'tinypng', function (done) {

  done();
}))

// exports.default = defaultTask 