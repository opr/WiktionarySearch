var gulp = require('gulp');
var bump = require('gulp-bump');
var zip = require('gulp-zip');

gulp.task('bump:patch', bumpWithOption('patch'));
gulp.task('bump:minor', bumpWithOption('minor'));
gulp.task('bump:major', bumpWithOption('major'));
gulp.task('zip:release', zipForRelease());

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


function zipForRelease() {
    return () => {
        let sources = [
          'src/**'
        ];
        gulp.src(sources)
            .pipe(zip('wiktionarysearch.zip'))
            .pipe(gulp.dest('./'));
    }
}
