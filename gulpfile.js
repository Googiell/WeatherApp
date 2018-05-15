const gulp = require('gulp')
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const babelify = require('babelify');
const browserify = require('browserify')
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');

gulp.task('movefonts', function() {
		return gulp.src('src/css/wi/weathericons-regular-webfont.woff')
	.pipe(gulp.dest('dist/wi'))
})

gulp.task('build', ['movefonts'],  function() {
	return gulp.src('*.html')
	.pipe(useref())
	.pipe(gulpIf('*.js', uglify()))
	.pipe(gulpIf('*.css', cssnano()))
	.pipe(gulp.dest('dist'));
});

gulp.task('es6', () => {
	browserify('src/app.js')
		.transform('babelify', {
			presets: ['es2015']
		})
		.bundle()	
		.pipe(source('src/app.js'))
		.pipe(buffer())
		.pipe(gulp.dest('build/'));
});

gulp.task('sass', function() {
	return gulp.src('src/scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('src/css'))
	.pipe(browserSync.stream())
});

gulp.task('reload', function() {
	browserSync.reload();
});

gulp.task('serve', ['sass', 'es6'], function() {
	browserSync({
		server: '.'
	});
	gulp.watch('*.html', ['reload']);
	gulp.watch('src/scss/**/*', ['sass']);
	gulp.watch('src/**/*', ['es6', 'reload']);
});

gulp.task('default', ['serve']);
