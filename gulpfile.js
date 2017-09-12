var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');

gulp.task('pack-js', function() {
    return gulp.src([
        'js/jquery.js',
        'js/fastclick.js',
        'js/foundation.js',
        'js/foundation.equalizer.js',
        'js/foundation.reveal.js',
        'js/scripts.js'
    ])
        .pipe(concat('bundle.js'))
        .pipe(minify({
            ext: {
                min: '.js'
            },
            noSource: true
        }))
        .pipe(gulp.dest('public'));
});

gulp.task('pack-css', function() {
    return gulp.src([
        'css/normalize.css',
        'css/foundation.css',
        'css/arvo.css',
        'css/ubuntu.css',
        'css/basics.css',
        'css/menu.css',
        'css/hero.css',
        'css/photo-grid.css',
        'css/modals.css',
        'css/footer.css'
    ])
        .pipe(concat('styles.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('public'));
});

gulp.task('default', ['pack-js', 'pack-css']);