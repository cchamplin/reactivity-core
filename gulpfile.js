var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "."
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('serveit', ['browser-sync'], function () {
    gulp.watch("index.html", ['bs-reload']);
    gulp.watch("lib/**/*.js", ['bs-reload']);
    gulp.watch("*.css", ['bs-reload']);
});