<?php
/**
 * Jetpack Compatibility File
 * See: http://jetpack.me/
 *
 * @package Heavy Metal Hamilton
 */

/**
 * Add theme support for Infinite Scroll.
 * See: http://jetpack.me/support/infinite-scroll/
 */
function hmh_jetpack_setup() {
	add_theme_support( 'infinite-scroll', array(
		'container' => 'content',
		'footer'    => 'page',
	) );
}
add_action( 'after_setup_theme', 'hmh_jetpack_setup' );
