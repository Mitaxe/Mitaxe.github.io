module.exports = function (grunt) {

  grunt.initConfig({
    concat: {
      js: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.main.js'
      },
      css: {
        src: ['css/src/*.css'],
        dest: 'css/dist/style.main.css'
      }
    },
    uglify: {
      js: {
        src: ['js/dist/script.main.js'],
        dest: 'js/dist/script.main.min.js'
      }
    },
    cssmin: {
      target: {
        files: {
          'css/dist/style.main.min.css': ['css/dist/style.main.css']
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};