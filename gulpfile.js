"use strict";
var gulp = require("gulp");
var connect = require("gulp-connect");
var open = require("gulp-open");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var concat = require("gulp-concat");
var lint = require("gulp-eslint");

var config = {
    port: 9005,
    devBaseUrl: "http://localhost",
    paths: {
        html: "./src/*.html",
        js: "./src/**/*.js",
        images: "./src/images/*",
        favicon: "./src/favicon.ico",
        css: [
            "node_modules/bootstrap/dist/css/bootstrap.min.css",
            "node_modules/bootstrap/dist/css/bootstrap-theme.min.css",
            "node_modules/toastr/build/toastr.min.css"
        ],
        mainJs: "./src/main.js",
        dist: "./dist"
    }
};

gulp.task("connect", function() {
    connect.server({
        root: ["dist"],
        port: config.port,
        base: config.devBaseUrl,
        fallback: "dist/index.html",
        livereload: true
    });
});

gulp.task("open", ["connect"], function() {
    gulp.src("dist/index.html").pipe(
        open({
            uri: config.devBaseUrl + ":" + config.port + "/"
        })
    );
});

gulp.task("lint", function() {
    return gulp
        .src(config.paths.js)
        .pipe(lint())
        .pipe(lint.format())
        .pipe(lint.failAfterError());
});

gulp.task("html", function() {
    gulp
        .src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task("js", function() {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on("error", console.error.bind(console))
        .pipe(source("bundle.js"))
        .pipe(gulp.dest(config.paths.dist + "/scripts"))
        .pipe(connect.reload());
});

gulp.task("images", function() {
    gulp
        .src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + "/images"))
        .pipe(connect.reload());

    gulp
        .src(config.paths.favicon)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task("css", function() {
    gulp
        .src(config.paths.css)
        .pipe(concat("bundle.css"))
        .pipe(gulp.dest(config.paths.dist + "/css"));
});

gulp.task("watch", function() {
    gulp.watch(config.paths.html, ["html"]);
    gulp.watch(config.paths.js, ["js", "lint"]);
});

gulp.task("default", ["html", "js", "css", "images", "lint", "open", "watch"]);
