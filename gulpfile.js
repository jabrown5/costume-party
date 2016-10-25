// will throw more errors. It looks for cleaner code.
'use strict';

var gulp 	= require('gulp');
var watch	= require('gulp-watch');
var nodemon	= require('gulp-nodemon');


// section to create SQL tables

// section to drop SQL tables

// watch for changes

// nodemon !!!!
gulp.task('Nodemon', restartServer);

function restartServer() {
	nodemon({
		script: './bin/www',
		ext: 'js hbs scss sql'
	});
};

gulp.task('default', ['Nodemon']);