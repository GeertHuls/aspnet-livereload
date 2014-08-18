module.exports = function (grunt) {
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.initConfig({
    // grunt-watch will monitor the projects files
    watch: {
      cshtmlfiles: {
        files: '../Views/{,*/}*.cshtml',
        options: {
          livereload: true
        }
      },
      jsfiles: {
        files: '../js/{,*/}*.js',
        options: {
          livereload: true
        }
      },
      cssfiles: {
        files: '../css/{,*/}*.css',
        options: {
          livereload: true
        }
      },
    }
  });
};
