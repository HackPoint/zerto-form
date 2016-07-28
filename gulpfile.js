let gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('connect-history-api-fallback'),
    bs = require('browser-sync');


gulp.task('serve', () => {
    bs.init({
        server: {
            baseDir: ['./', './src'],
            middleware: [connect()]
        }
    });

    gulp.watch('src/assets/**/*.scss', ['sass']);
    gulp.watch('src/**/*.html').on('change', bs.reload);
    gulp.watch('src/**/*.js').on('change', bs.reload);
});


gulp.task('sass', () => {
   return gulp.src('src/assets/**/*.scss')
       .pipe(sass())
       .pipe(gulp.dest('src/assets/css'))
       .pipe(bs.stream());
});

gulp.task('default', ['serve']);