let mix = require ('laravel-mix');

mix.sass('src/master.scss', 'assets/css/').options({
    processCssUrls: false
});
