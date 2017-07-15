var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');
    // concat = require('gulp-concat'),
    // uglify  = require('gulp-uglifyjs'),
    // cssmin = require('gulp-cssmin'),
    // rename = require('gulp-rename'),
    // imagemin = require('gulp-imagemin');

gulp.task('sass', function() {
    return gulp.src('app/sass/main.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}));
});

// gulp.task('concat', function() {
//     return gulp.src(['app/sass/base/*.sass', 'app/sass/layout/*.sass', 'app/sass/module/*.sass', 'app/sass/state/*.sass'])
//         .pipe(concat('main.sass'))
//         .pipe(gulp.dest('app/sass'))
// });

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

// // min js
// gulp.task('js-min', function() {
//     return gulp.src('app/js/**/*.js')
//         .pipe(uglify())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest('dist/js'));
// });
//
//
// // min css
// gulp.task('cssmin', function() {
//     return gulp.src('app/css/main.css')
//         .pipe(cssmin())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest('dist/css'));
// });
//
// // image min task
// gulp.task('img', function() {
//     return gulp.src('app/img/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/img'));
// });
//
//
// // html
// gulp.task('html', function() {
//     return gulp.src('app/*.html')
//         .pipe(gulp.dest('dist'));
// })
//
//
// // bild project to dist
// gulp.task('bild',['html','cssmin','js-min','img']);


gulp.task('watch', ['sass', 'browser-sync'], function() {
    gulp.watch('app/sass/**/*.+(scss|sass)',['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});