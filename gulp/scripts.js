let gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs');


//сжатие javascript библиотек и перенаправление в файл libs.min.js
gulp.task("scripts", function () {
    return gulp.src([
        'app/js/libs/jquery/jquery.js',

    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});


