'use strict';
var path = require('path');
module.exports = function(grunt) {
  /**
   * Load required Grunt tasks. These are installed based on the versions listed
   * in `package.json` when you do `npm install` in this directory.
   */
  require('load-grunt-tasks')(grunt);
  /**
   *  Time how long tasks take. Can help when optimizing build times
   */
  require('time-grunt')(grunt);

  /**
   * Load in our build configuration file.
   */
  var userConfig = require('./build.config.js');

  // Project configuration.
  /**
   * Clean build and compile directories by removing folders
   */
  var taskConfig = {
    /**
     * We read in our `package.json` file so we can access the package name and
     * version. It's already there, so we don't repeat ourselves here.
     */
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build:{
          src:['<%= dir.build %>']
      },
      compile:{
          src:['<%= dir.compile %>']
      },
      tmp:{
          src:['.tmp']
      }
    },

    //insert tmpl into html
    includereplace: {
      build: {
        options: {
          globals: {
            apiUrl: '<%= apiUrl %>',
            staticUrl: '<%= staticUrl %>',
            appVersion: '<%= pkg.version %>',
          },
        },
        files: [
          {
            cwd: '<%= dir.app %>/',
            src: '<%= app.html %>', 
            dest: '<%= dir.build %>',
            expand: true
          },
          {
            cwd: '<%= dir.app %>/',
            src: '<%= app.js %>', 
            dest: '<%= dir.build %>',
            expand: true
          }
        ]
      }
    },

    //Compile sass files
    sass: {
      build: {
        options:{
            lineNumbers:true
        },
        files: [
          {
            expand: true,
            cwd: '<%= dir.assets %>/scss/',
            src: ['<%= app.sass %>'],
            dest: '<%= dir.build %>/assets/css/',
            ext: '.css'
          }
        ]
      }
    },

    copy: {
        build: {
            files: [
                {
                    expand: true,
                    cwd: '<%= dir.app %>/root/', 
                    src: ['*.*'],
                    dest: '<%= dir.build %>/',
                    dot: true
                },
                {
                    expand: true,
                    cwd: '<%= dir.app %>/', 
                    src: [
                      '<%= app.fonts %>',
                      '<%= app.images %>'
                    ],
                    dest: '<%= dir.build %>/'
                },
                {
                    src: [
                      '<%= vendor.js %>',
                      '<%= vendor.css %>',
                      '<%= vendor.assets %>',
                      '<%= static.src %>',
                      '<%= static.vendor %>'
                    ],
                    dest: '<%= dir.build %>/'
                },
            ],
        },
        compile: {
            files: [
                {
                    expand: true,
                    cwd: '<%= dir.app %>/root/', 
                    src: ['*.*'],
                    dest: '<%= dir.compile %>/',
                    dot: true
                },
                {
                    expand: true,
                    cwd: '<%= dir.app %>/', 
                    src: [
                      '<%= app.fonts %>'
                    ],
                    dest: '<%= dir.compile %>/'
                },
                {
                    src: [
                      '<%= static.src %>',
                      '<%= static.vendor %>'
                    ],
                    dest: '<%= dir.compile %>/'
                }
            ]
        },
    },

    useminPrepare: {
        options: {
            root: '<%= dir.build %>',
            dest: '<%= dir.compile %>'
        },
        html: [
          '<%= dir.build %>/<%= app.html %>'
        ]

    },
    usemin: {
        html: [
          '<%= dir.compile %>/<%= app.html %>'
        ]
    },

    imagemin: {
        compileAssets: {
            files: [
                {
                        expand: true,
                        cwd: '<%= dir.build %>/assets/img',
                        src: '{,*/}*.{png,jpg,jpeg}',
                        dest: '<%= dir.compile %>/assets/img'
                    }
                ]
            },
        compileAssetsStatic: {
            files: [
                {
                    expand: true,
                    cwd: '<%= dir.compile %>/static/browserHappy/assets',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= dir.compile %>/static/browserHappy/assets'
                }
            ]
        }
    },
    htmlmin: {
        options: {
          removeComments: false,
          collapseWhitespace: false,
          removeEmptyAttributes: true
        },
        compile: {
            files: [
                {
                    expand : true,
                    cwd: '<%= dir.build %>',
                    src: ['<%= app.html %>'],
                    dest: '<%= dir.compile %>'
                }
            ]
        }
    },
    rev: {
        compile: {
            files: {
                src: [
                    '<%= dir.compile %>/js/{,*/}*.js',
                    '<%= dir.compile %>/css/{,*/}*.css'
                ]
            }
        }
    },

    //w3c validation
    validation: {
        options: {
            reset: grunt.option('reset') || true,
            stoponerror: true,
            relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.']
        },
        files: {
            src: ['<%= build.html %>']
        }
    },

    //JavaScript validation
    jshint: {
      reporter: require('jshint-stylish'),
      files: ['gruntfile.js', '<%= build.js %>'],

      options: {
        jshintrc: true
      }
    },

    //css validation
    csslint: {
      styles: {
        src: ['<%= build.css %>'],
        options: {
          'import': false,
          'ids': false,
          'font-sizes': false,
          'unqualified-attributes': false,
          'floats': false,
          'overqualified-elements': false,
          'adjoining-classes': false,
          'important': false,
          'box-sizing': false,
          'unique-headings': false,
          'qualified-headings': false,
          'regex-selectors': false,
          'universal-selector': false,
          'duplicate-properties': false,
          'duplicate-background-images': false,
          'box-model': false,
          'outline-none': false,
          'text-indent': false,
          'compatible-vendor-prefixes': false,
          'star-property-hack': false,
          'display-property-grouping': false,
          'underscore-property-hack': false
        }
      }
    },

    //JS unit test
    jasmine: {
      app: {
        src: '<%= build.js %>',
        options: {
          specs: '<%= test.specs %>',
          helpers: '<%= test.helpers %>',
          vendor: [
            '<%= dir.vendor %>/jquery/dist/jquery.min.js'
          ]
        }
      }
    },

    connect: {
      build: {
        options: {
          hostname: '0.0.0.0',
          port: 9000,
          base: '<%= dir.build %>',
          open: false,
          debug: false
        }
      }
    },

    //get current commit
    'git-describe': {
        options: {
          template: '<%= projectName %>-{%=tag%}-{%=since%}-{%=object%}{%=dirty%}'
        },
        prod: {
        },
    },

    //zip dist
    compress: {
      options: {
        archive: function () {
          return grunt.option('gitrev') + '.zip';
        }
      },
      build: {
        files: [
          {
            expand: true,
            cwd: '<%= dir.build %>/',
            src: ['**'], 
            dest: '.',
            filter: 'isFile'
          }
        ]
      },
      compile: {
        files: [
          {
            expand: true,
            cwd: '<%= dir.compile %>/',
            src: ['**'], 
            dest: '.',
            filter: 'isFile'
          }
        ]
      }
    },

    /* Reference the watch files and tasks active when detect changes. */
    watch: {
      gruntfile: {
        files: 'gruntfile.js',
        options: {
          reload: true
        },
        tasks: ['jshint']
      },
      sass: {
          files: ['<%= dir.assets %>/scss/<%= app.sass %>'],
          tasks: ['sass']
      },
      html: {
          files: ['<%= app.html %>', '<%= app.tmpl %>'],
          tasks: ['includereplace']
      },
      js: {
          files: ['app/<%= app.js %>'],
          tasks: ['includereplace', 'jshint']
      }
    }

  };
  grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));

  /**
   * Options
   */
  var env = grunt.option('env') || 'local';
  switch(env) {
    case 'dev':
        grunt.config.set('apiUrl', 'http://localhost:8000');
        grunt.config.set('staticUrl', 'http://static.gairal.com');
        break;
    case 'prod':
        grunt.config.set('apiUrl', 'https://api-gairal.herokuapp.com');
        grunt.config.set('staticUrl', 'http://static.gairal.com');
        break;
    default:
        grunt.config.set('apiUrl', 'https://api-gairal.herokuapp.com');
        grunt.config.set('staticUrl', 'http://static.gairal.com');
        break;
  }

  //store git revistion when callinh git-describe
  grunt.event.once('git-describe', function (rev) {
    grunt.option('gitrev', rev);
  });

  grunt.registerTask('default', [
    'build',
    'connect',
    'watch'
  ]);

  grunt.registerTask('validate', [
    'validation',
    'jshint',
    'csslint',
    //'jasmine'
  ]);

  grunt.registerTask('minify', [
    'cssmin',
    'imagemin',
    'htmlmin',
    'uglify',
  ]);

  grunt.registerTask('build', [
      'clean',
      'includereplace',
      'sass',
      'copy:build'
  ]);
  grunt.registerTask('compile', [
      'build',
      'validate',
      'copy:compile',
      'useminPrepare',
      'concat',
      'minify',
      'rev',
      'usemin',
      'clean:tmp'
  ]);

  grunt.registerTask('delivery', [
      'compile',
      'git-describe',
      'compress:compile'
  ]);

  grunt.registerTask('makezip:build', [
      'git-describe',
      'compress:build'
  ]);

  grunt.registerTask('makezip:compile', [
      'git-describe',
      'compress:compile'
  ]);
};
