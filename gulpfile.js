"use strict";

var gulp = require("gulp");
var source = require("vinyl-source-stream");
var livereload = require('gulp-livereload');
var browserify = require("browserify");
var watchify = require("watchify");
var to5ify = require("6to5ify");

gulp.task("default", function() {
    var b = browserify({ cache: {}, packageCache: {}, fullPaths: true })
        .add("./lib/main.js")

    var bundler = watchify(b);

    function rebundle() {
        console.log("Updating...")
        return bundler.bundle()
            .pipe(source("bundle.js"))
            .pipe(gulp.dest("./public/js")).pipe(livereload());
    }

    bundler
        .transform(to5ify)
        .on("update", rebundle);
 
    livereload.listen(35729);
    return rebundle();
});
