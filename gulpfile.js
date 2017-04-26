var gulp = require('gulp'),  
sass = require('gulp-sass'),
sourcemaps = require('gulp-sourcemaps');

var config = {  
  srcPath: 'assets/',
  distPath: 'dist/'
};
 
gulp.task('sass', function(){  
  return gulp.src(config.srcPath+'sass/**/*.+(scss|sass)')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError)) // Using gulp-sass
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.distPath+'css'));
});

gulp.task('watch', function() {
    gulp.watch(config.srcPath+'sass/**/*.+(scss|sass)', ['sass']);
});