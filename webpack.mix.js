let mix = require ('laravel-mix');

mix.js('src/js/main.js', 'assets/js/');
mix.sass('src/scss/master.scss', 'assets/css/').options({
    processCssUrls: false
});
