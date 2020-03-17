/* global module: true */
module.exports = function (grunt) {
    grunt.initConfig({
        cssmin: {
            'register.min.css':'register.css'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['cssmin'])
}