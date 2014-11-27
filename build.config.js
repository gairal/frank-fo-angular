module.exports = {
// Paths
    projectName: 'MyProject',
    dir:{
        app: 'app',
        build: 'build',
        compile: 'compile',
        test: 'test',
        vendor: 'vendor',
        static: 'static',
        assets: '<%= dir.app %>/assets',
        test: 'test'
    },
    app:{
        index:'index.html',
        html:['**/*.html'],
        tmpl:['**/*.tmpl'],
        sass:['main.scss'],
        css:['assets/css/**/*.css'],
        js:['assets/js/**/*.js'],
        fonts:['assets/fonts/**'],
        images:['assets/img/**'],
        various:['root/**']
    },
    static:{
        src:['<%= dir.static %>/**/*.*'],
        vendor:['<%= dir.vendor %>/normalize.css/normalize.css']
    },
    build:{
        js: '<%= dir.build %>/assets/js/**/*.js',
        css: '<%= dir.build %>/assets/css/**/*.css',
        html: '<%= dir.build %>/**/*.html',
        fonts: '<%= dir.build %>/assets/fonts/**',
        img: ''
    },
    test:{
        specs:    '<%= dir.test %>/*.spec.js',
        helpers:  '<%= dir.test %>/*.helper.js',
    },

    /**
     * All vendor script or css that should be import in your project.
     * Each of vendor script or css will be loaded before your custom app_files.js
     */

    vendor: {
        js: [
            '<%= dir.vendor %>/angular-bootstrap/ui-bootstrap.js'
        ],
        css: [],
        assets: [
            '<%= dir.vendor %>/bootstrap-sass-official/assets/fonts/bootstrap/glyphicons-halflings-regular.eot',
            '<%= dir.vendor %>/bootstrap-sass-official/assets/fonts/bootstrap/glyphicons-halflings-regular.svg',
            '<%= dir.vendor %>/bootstrap-sass-official/assets/fonts/bootstrap/glyphicons-halflings-regular.ttf',
            '<%= dir.vendor %>/bootstrap-sass-official/assets/fonts/bootstrap/glyphicons-halflings-regular.woff'
        ]
    }
};