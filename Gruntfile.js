module.exports = function (grunt) {
   grunt.loadNpmTasks('grunt-contrib-connect');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-svgmin');
   grunt.loadNpmTasks('grunt-svgstore');
   grunt.loadNpmTasks('grunt-grunticon');


   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
         options: {
            separator: ';',
         },
         dist: {
            src: [
               'src/*.js',
               'src/**/*.js',
               'src/**/**/*.js',
               'src/**/**/**/*.js',
            ],
            dest : 'dist/crow-svg.js',
         },
      },

      uglify: {
         all_src : {
            options : {
               sourceMap : false,
               compress: true,
               mangle: true
            },
            src: [
               'src/*.js',
               'src/**/*.js',
               'src/**/**/*.js',
               'src/**/**/**/*.js',
            ],
            dest : 'dist/crow-svg.min.js',
         },
      },

      cssmin: {
         options: {
            shorthandCompacting: false,
            roundingPrecision: -1
         },
         target: {
            files: {
               'dist/css/style.min.css': ['src/css/style.css']
            }
         }
      },

      sass: {
         all: {
            src: 'src/sass/style.scss',
            dest: 'src/css/style.css',
         }
      },

      connect: {
         serve: {
            options: {
               port: 8080,
               livereload: true,
               base: [
                  './example',
                  '.',
               ],
               hostname: '*',
               debug: true
            }
         }
      },

      watch: {
         options: {
            livereload: true,
            atBegin: true
         },
         sass: {
            options: {
               style: "compressed"
            },
            files: [
               'src/sass/style.scss',
               'src/sass/**/*.scss',
               'src/sass/**/**/*.scss',
            ],
            tasks: ['sass']
         },

         concat: {
            files: [
               'src/**/*.js',
               'src/*.js',
               'src/**/templates/*.js',
               'Gruntfile.js',
            ],
            tasks: ['concat']
         },
         cssmin: {
            files: ['src/css/style.css'],
            tasks: ['cssmin']
         },
         uglify: {
            files: [
               'src/*.js',
               'src/**/*.js',
            ],
            tasks: ['uglify']
         }
      },
   });

   grunt.registerTask('build', ['sass', 'cssmin', 'concat', 'uglify']);
   grunt.registerTask('default', ['connect', 'watch']);
};
