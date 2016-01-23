module.exports = function(grunt){
	grunt.initConfig({
		uglify: {
			my_target: {
			  files: {
				'js/min/min.js': ['js/*.js']
			  }
			}
		  },
		cssmin: {
			  combine: {
				files: {
				  'css/min.css': ['css/style.css']
				}
			  }
			},

		watch: {
			dist: {
				files: ['js/*.js', 'css/*.css', '!**/min.*','*.html'],
				tasks: ['taskwatch'],
				options: { spawn: false}
			}
		},
		imagemin: {                          // Task
		    dynamic: {                         // Another target
		      files: [{
		        expand: true,                  // Enable dynamic expansion
		        cwd: 'image/',                   // Src matches are relative to this path
		        src: ['*.{png,jpg}'],   // Actual patterns to match
		        dest: 'image/min/'                  // Destination path prefix
		      }]
		    }
  		},
  		replace: {
			  css: {
			    src: ['css/min.css'],
			    overwrite: true,                 // overwrite matched source files
			    replacements: [{
			      from: "../image/",
			      to: "../image/min/"
			    }]
			  },
			  html: {
			    src: ['index.html'],
			    overwrite: true,                 // overwrite matched source files
			    replacements: [{
			      from: "image/",
			      to: "image/min/"
			    }]
			  }		  
			},
		htmlmin: {                                     // Task
		    dist: {                                      // Target
		      options: {                                 // Target options
		        removeComments: true,
		        collapseWhitespace: true
		      },
		      files: {                                   // Dictionary of files
		        'index.html': 'index-dev.html',     // 'destination': 'source'
		      }
		    }
		  }
	});
	
	require('load-grunt-tasks')(grunt);

	
	grunt.registerTask('default', ['uglify', 'cssmin','imagemin','htmlmin','replace']);
	grunt.registerTask('taskwatch', ['uglify', 'cssmin','htmlmin','replace']);

}