'use strict';
module.exports = function(grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        // watch for changes and trigger compass, jshint, uglify and livereload
        watch: {
            options: {
                livereload: true,
            },
            compass: {
                files: ['scss/**/*.{scss,sass}'],
                tasks: ['compass']
            },
            js: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'uglify']
            },
            livereload: {
                options: { livereload: true },
                files: ['style.css', 'assets/js/*.js', '*.html', '*.php', 'assets/images/**/*.{png,jpg,jpeg,gif,webp,svg}']
            }
        },

        // compass and scss
        compass: {
            dist: {
                options: {
                    config: 'config.rb',
                    force: true
                }
            }
        },

        // javascript linting with jshint
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                "force": true
            },
            all: [
                'Gruntfile.js',
                'library/js/**/*.js'
            ]
        },

        // uglify to concat, minify, and make source maps
        uglify: {
            dist: {
                options: {
                    sourceMap: 'js/map/source-map.js'
                },
                files: {
                    'js/plugins.min.js': [
                        'js/lib/**/*.js',
                        '!js/libs/modernizr*.js'
                    ],
                    'js/main.min.js': [
                        'js/scripts.js'
                    ]
                }
            }
        },

        // image optimization
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: '**/*',
                    dest: 'img/'
                }]
            }
        },


    });

    // register task
    grunt.registerTask('default', ['watch']);

};