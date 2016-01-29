module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Jasmine
    jasmine: {
      all: {
        options: {
          specs: "tests/*.js"
        }
      }
    }
  });

  // Load grunt mocha task
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('test', [ 'jasmine' ]);
};
