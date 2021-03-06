// See http://brunch.io/#documentation for docs.

module.exports = {
  paths: {
    public: 'public',
    watched: ['assets']
  },

  files: {
    javascripts: {joinTo: 'js/app.js'},
    stylesheets: {joinTo: 'css/app.css'}   
  },

  conventions: {
    assets: /assets\/digest[\\/]/
  },

  plugins: {
    digest: {manifest: 'manifest.json'}
  },

  modules: {
    autoRequire: {
      'js/app.js': ['assets/js/index.js']
    }
  },

  server: {
    hostname: '0.0.0.0',
    port: 9484 
  }
};

