module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }
        },

        compass: {
          dist: {
            options: {
                sassDir:'css/sass',
                cssDir: 'css/stylesheets',
                config: 'css/config.rb'
            }
          }
        },

        watch: {
            css: {
                  files: ['**/*.scss'],
                  tasks: ['compass']
            },
            images: {
                files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
                tasks: ['imagemin'],
                options: {
                  spawn: false,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['imagemin', 'compass', 'watch']);
};
