var elixir = require('laravel-elixir');
require('laravel-elixir-livereload');

elixir.config.assetsPath = 'themes/fresh/assets/';
elixir.config.publicPath = 'themes/fresh/assets/compiled/';

elixir(function(mix) {
    mix.sass('style.scss');

    mix.scripts([
        'jquery.js',
        'app.js'
    ]);
})