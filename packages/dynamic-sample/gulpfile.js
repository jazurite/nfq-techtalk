const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'))
const flatten = require('gulp-flatten');
const postcss = require('gulp-postcss')
const cleanCSS = require('gulp-clean-css');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const sources = [
  'styles/base/*.scss',
  'styles/layouts/**/*.scss',
  'styles/migrate/**/*.scss',
  'styles/pages/*.scss',
  'styles/sections/**/*.scss',
  'styles/vendors/*.scss'
];

gulp.task('sass', function () {
  return gulp.src(sources)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(flatten())
    .pipe(postcss([
      tailwindcss('./tailwind.config.js'),
      autoprefixer()
    ]))
    .pipe(cleanCSS({ level: 2 }))
    .pipe(gulp.dest('cdn/shop/t/11/assets'))
});

gulp.task('watch', function () {
  gulp.watch('styles/**/*.scss', gulp.series('sass'))
})
