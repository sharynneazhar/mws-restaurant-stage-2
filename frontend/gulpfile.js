const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');

gulp.task('js', () => {
  return gulp.src(['js/dbhelper.js', 'js/main.js', 'js/restaurant_info.js'])
    .pipe(babel({ presets: ['env'] }))
    .pipe(concat('bundle.js'))
    .pipe(rename('bundle.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('css', () => {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({ level: 2 }))
    .pipe(concat('bundle.css'))
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('dist'));
});
