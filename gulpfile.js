const gulp = require('gulp');
const babel = require('gulp-babel');
const minify = require('gulp-minify');

gulp.task('compile', () => {
  return gulp.src('src/*.es6')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(''));
});

gulp.task('minify', ['compile'], () => {
  return gulp.src('*.js')
    .pipe(minify({ 
      ext: {
        min: '.min.js'
      },
      ignoreFiles: ['gulpfile.js', '*.min.js']
    }))
    .pipe(gulp.dest(''));
});

gulp.task('watch', () => {
  return gulp.watch('src/**/*.es6', ['minify']);
});