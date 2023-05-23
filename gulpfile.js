// importando o gulp
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify'); // minificação do javascript
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

// comprimindo imagens
function comprimirImagens() {
  return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
  return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

// compilando o Sass com o Gulp
function compilaSass() {
  return gulp.src('./source/styles/main.scss') // Arquivo origem
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed' // Deixando o arquivo sass mais leve
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles')); // Arquivo destino
}

exports.default = function () {
  gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
  gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript));
  gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimirImagens));
}