var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
    bootstrapDir: './bower_components/bootstrap-sass',
	styleDir: './resources/scss/*.scss',
    publicDir: './dist',
};

gulp.task('css', function() {
    return gulp.src('./resources/scss/style.scss')
    .pipe(sass({
        includePaths: [config.bootstrapDir + '/assets/stylesheets']
    }))
    .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('watch', function() {
	gulp.watch(config.styleDir, ['css']);
});

gulp.task('default', ['css', 'fonts']);