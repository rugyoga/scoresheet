'use strict';
var packagejson = require('./package.json');

var config = {
	pkg: packagejson,
	bowerdir: 'bower_components',
	dist: 'public/dist'
}

module.exports = function (grunt) {

  // Configuration
  grunt.initConfig({
	config: config,
    pkg: config.pkg,
    watch: {
      scripts: {
        files: ['public/js/app.js', '!public/js/controllers/*Spec.js', 'public/js/controllers/*.js'],
        tasks: ['default']
      }
    },
    jshint: {
      build: ['public/js/app.js', 'public/js/controllers/*.js', 'server.js']
    },
    copy: {
		dist: {
			files: [{
				expand: true,
				cwd: '<%= config.bowerdir %>/bootstrap/dist',
				src: 'css/*.min.css',
				dest: '<%= config.dist %>'
			},
			{
				expand: true,
				cwd: '<%=config.bowerdir%>/bootstrap/dist',
				src: 'fonts/*',
				dest: '<%= config.dist %>'
			},
			{
				expand: true,
				cwd: '<%=config.bowerdir%>/font-awesome',
				src: 'css/font-awesome.min.css',
				dest: '<%= config.dist %>'
			},
			{
				expand: true,
				cwd: '<%=config.bowerdir%>/font-awesome',
				src: 'fonts/*',
				dest: '<%= config.dist %>'				
			}]
		}
	},
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      dist: {
        files: { '<%= config.dist %>/js/<%= pkg.name %>.min.js': 
				['<%=config.bowerdir%>/jquery/dist/jquery.min.js',
				 '<%=config.bowerdir%>/bootstrap/dist/js/bootstrap.min.js',
				 '<%=config.bowerdir%>/angular/angular.min.js',
				 '<%=config.bowerdir%>/bootstrap/dist/js/bootstrap.min.js',
			     '<%=config.bowerdir%>/underscore/underscore-min.js',
				 'public/js/app.js',
				 'public/js/controllers/ScoresheetCtrl.js'] }
      },
	  dev: {
			options: { mangle: false, beautify: true },
			files: { 
				'<%= config.dist %>/js/<%= pkg.name %>.js':
					['<%=config.bowerdir%>/jquery/dist/jquery.js',
					 '<%=config.bowerdir%>/bootstrap/dist/js/bootstrap.js',
					 '<%=config.bowerdir%>/angular/angular.js',
					 '<%=config.bowerdir%>/angular-mocks/angular-mocks.js',
					 '<%=config.bowerdir%>/bootstrap/dist/js/bootstrap.js',
					 '<%=config.bowerdir%>/underscore/underscore.js',
					 'public/js/app.js',
					 'public/js/controllers/ScoresheetCtrl.js']
			}		
	  }
    }
  });
  
  grunt.registerTask( 'default', ['copy', 'jshint', 'uglify'] );
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
};
