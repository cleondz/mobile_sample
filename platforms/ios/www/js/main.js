/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({
    
    paths: {
        'domReady': '../lib/requirejs-domready/domReady',
         'angular': '../lib/angular/angular',
          'jquery': '../lib/jquery/jquery-1.10.2.min',
       'twbootstrap': 'bootstrap.min.js'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular'
        }
    },

    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});
