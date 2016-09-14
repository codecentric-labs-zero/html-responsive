var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

var config = {
    bootstrapDir: './bower_components/bootstrap-sass',
    jqueryDir: './bower_components/jquery',
	styleDir: './resources/scss/*.scss',
    publicDir: './dist',
};

gulp.task('css', function() {
    return gulp.src('./resources/scss/main.scss')
    .pipe(sass({
        includePaths: [config.bootstrapDir + '/assets/stylesheets']
    }))
    .pipe(rename('app.css'))
    .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('js', function() {
    return gulp.src([config.jqueryDir + '/dist/jquery.min.js', config.bootstrapDir + '/assets/javascripts/bootstrap.min.js'])
        .pipe(gulp.dest(config.publicDir + '/js'));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('watch', function() {
	gulp.watch(config.styleDir, ['css']);
});

gulp.task('default', ['css', 'js', 'fonts']);