Starter build template for Gairal F-E Development

###Todo
- Rename Accomplishement to achievments in the back
- G+ and FB
- Sprites
- Jasmine
- Express
- Google Analytics
- reintegrate AngularMaterial when working
- 404
- fusionner bqckelites
- fix typos


###Install
####Node/npm
1.  git clone repo
2.  `npm install`
3.  `bower install`

####Project
customize site with the following source files:
    - `app/html/*.html` for main pages. But these pages will be compiled to insert the partials. And will end in app/
    - `app/html/tmpl/*.tmpl` for the html templates that will be included in html files
    - `app/assets/sass/*.scss`
    - `app/assets/js/*.js`
    - `app/assets/spec/*.js` Describe Jasmine's Unit tests

####Preprocessor
Both Less And Sass tasks have been integrated in the boilerplate.
This is certainly temporary but for now choose yours and update the gruntfile.js and remove the useless folders.

####Bower
Bower dependencies goes to the folder `app/vendor`. The full directory will be copied to dist directoy when packaging.

####Grunt
Multiple grunt tasks have been registered to help you start quickly:
1. `grunt`: default task for development. Lauch a httpserver on `localhost:8000`. Then launch the watcher to auto-compile less/sass files and include/replace the partials in html files.
2. `grunt validate`: validate JS and CSS sources using jshint an csslint. Validate W3C compliance using html validation plugin. Execute Jasmine Unit Test using phantomJS
3. `grunt build`: build everything in the build dir + 1 + 2 (without watcher)
4. `grunt compile`: 3 + concate, minify files in the compile directoy
5. `grunt delivery`: 4 + create a zip for delivery

####HTTP server (connect)
The `grunt` default task launch a http server on `localhost:8080` pointing to `app/`. When you stop the watch task, the server stops.
If you want to launch the server without watching the code use the following commands:
    - `grunt connect:keepalive` to start the server pointing to `build/`
