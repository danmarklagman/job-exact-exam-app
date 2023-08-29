// Require gulp
const gulp = require("gulp");

// Require all packages
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

// Config

var config = {
    npmDir: "node_modules/",
};

// ALL Javascripts

var allScripts = [
    // Node Modules
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
    // Custom Script
    "src/assets/javascripts/**/*.js",
];



// Using gulp-sass
function styles() {
    return gulp
        .src([
            "src/assets/styles/*.scss"
        ])
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(sourcemaps.write("/../maps"))
        .pipe(gulp.dest("public/css"));
}

// Using gulp-uglify
function scripts() {
    return gulp
        .src(allScripts)
        .pipe(sourcemaps.init())
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write("/../maps"))
        .pipe(gulp.dest("public/javascripts/"));
}

function watch() {
    gulp.watch("src/assets/sass/**/*.scss", styles);
    gulp.watch("src/assets/javascripts/**/*.js", scripts);
}

const watchFiles = gulp.parallel(watch, styles, scripts);

exports.styles = styles;
exports.scripts = scripts;
exports.default = watchFiles;
