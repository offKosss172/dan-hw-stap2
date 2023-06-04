const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const del = require('del');
const browserSync = require('browser-sync').create();
const merge = require('merge-stream');

const paths = {
  styles: {
    src: [
      'src/scss/**/*.scss',
      '!src/scss/responsive.scss'
    ],
    responsive: 'src/scss/responsive.scss',
    dest: 'dist/css'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js'
  },
  images: {
    src: 'src/img/**/*',
    dest: 'dist/img'
  }
};

function clean() {
  return del(['dist']);
}

function styles() {
  return merge(
    gulp.src(paths.styles.src)
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(cleanCSS()),
    gulp.src(paths.styles.responsive)
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(cleanCSS())
  )
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

function images() {
  return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.images.src, images);
  gulp.watch('./*.html').on('change', browserSync.reload);
}

const build = gulp.series(clean, gulp.parallel(styles, scripts, images));
const dev = gulp.series(build, watch);

exports.build = build;
exports.dev = dev;
exports.default = dev;
