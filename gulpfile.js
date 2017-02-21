var gulp = require('gulp');
var bump = require('gulp-bump');

gulp.task('bump:patch', bumpWithOption('patch'));
gulp.task('bump:minor', bumpWithOption('minor'));
gulp.task('bump:major', bumpWithOption('major'));

function bumpWithOption( option ) {
    return () => {
        let sources = [
            'manifest.json',
            'package.json'
        ];

        gulp.src(sources)
            .pipe(bump({type: option}))
            .pipe(gulp.dest('./'));
    }
}