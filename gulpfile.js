var gulp         = require('gulp'), 
    sass         = require('gulp-sass'), 
    browserSync  = require('browser-sync'), 
    csscomb      = require('gulp-csscomb');

gulp.task('sass', function(){ 
    return gulp.src('sass/**/*.scss') 
        .pipe(csscomb())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('../Grain-Overlay-with-animate.css/css')) 
        .pipe(browserSync.reload({stream: true})) 
});

gulp.task('browser-sync', function() { 
    browserSync({ 
        server: { 
            baseDir: '../Grain-Overlay-with-animate.css' 
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('sass/main.scss', ['sass']); 
    gulp.watch('*.html', browserSync.reload); 
});

