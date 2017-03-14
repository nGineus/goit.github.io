module.exports = function(grunt) {
grunt.initConfig({

  concat: {
    options: {
    separator: '\n;\n',
  },
  dist: {
   src: ['js/src/*.js'],
   dest: 'js/dist/script.main.js'
  }
 },

 concat_css: {
    options: {
      // Task-specific options go here.
    },
    all: {
      src: ['css/reset.css', 'css/master.css'],
      dest: 'css/reset_master.css'
    }
  },

 sass: {                              // Task
   dist: {                            // Target
     options: {                       // Target options
       style: 'expanded'
     },
     files: {                         // Dictionary of files
       'css/master.css': 'css/master.scss'       // 'destination': 'source'
     }
   }
 },

 uglify: {
   dist: {
      src: ['js/dist/script.main.js'],
     dest: 'js/dist/script.main.min.js'
    }
  },

  jshint: {
        files: ['js/dist/script.main.js'], //, 'js/dist/script.main.min.js'
        options: {
          // options here to override JSHint defaults
          globals: {
            jQuery: true,
            console: true,
            module: true,
            document: true
          }
        }
  }

});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-concat-css');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-jshint');

grunt.registerTask('hint', ['jshint']);

grunt.registerTask('default', ['concat','concat_css','sass','uglify']);

console.log('All done');
}
