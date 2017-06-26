var gulp = require('gulp'),  
sass = require('gulp-sass'),
usemin = require('gulp-usemin');
sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function(){  
  return gulp.src('sass/**/*.+(scss|sass)')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError)) // Using gulp-sass
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('sass/**/*.+(scss|sass)', ['sass']);
});

gulp.task('copy', function(){
  gulp.src('images/**/*')
    .pipe(gulp.dest('../www/images'));
  gulp.src('fonts/**/*')
    .pipe(gulp.dest('../www/fonts'));
  gulp.src('css/main.css')
    .pipe(gulp.dest('../www/css/'));
  gulp.src('index.html')
    .pipe(gulp.dest('../www/'));
});

gulp.task('build', ['sass', 'copy']);