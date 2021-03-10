<?php
    function enqueue_styles_and_scripts() {
        $ver = '3.3.4';
        wp_register_style('main', get_template_directory_uri() . '/assets/css/main.css', array(), $ver, 'all');
        wp_enqueue_style('main');
    }

    add_action('wp_enqueue_scripts', 'enqueue_styles_and_scripts');
?>