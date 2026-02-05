<?php
/**
 * Plugin Name: Jet Listing Custom Svg
 * Description: Adds "Custom SVG" option to JetEngine Listing Grid slider arrow dropdown and injects hard-coded SVG arrows on frontend.
 * Version:     1.0
 * Author:      Dev Mohsan
 * Text Domain: jet-engine-custom-functionalities
 */

if ( ! defined( 'ABSPATH' ) ) exit;

function jecf_add_custom_svg_option_to_arrow_control( $element ) {

	$controls = $element->get_controls();
	if ( empty( $controls ) || ! is_array( $controls ) ) return;

	$must_have = array( 'Angle', 'Chevron', 'Angle Double', 'Arrow', 'Caret' );

	foreach ( $controls as $control_id => $control ) {

		if ( empty( $control['options'] ) || ! is_array( $control['options'] ) ) continue;

		$labels  = array_values( $control['options'] );
		$matched = 0;

		foreach ( $must_have as $label ) {
			if ( in_array( $label, $labels, true ) ) $matched++;
		}

		if ( $matched >= 3 ) {
			$options = $control['options'];
			$options['custom_svg'] = __( 'Custom SVG', 'jet-engine-custom-functionalities' );

			$element->update_control( $control_id, array(
				'options' => $options,
			) );
			break;
		}
	}
}

add_action( 'init', function () {

	$sections = array(
		'section_slider',
		'slider_section',
		'section_slider_settings',
		'section_slider_general',
		'section_slider_content',
		'section_settings_slider',
		'section_carousel',
		'section_general',
	);

	foreach ( $sections as $sec ) {
		add_action(
			"elementor/element/jet-listing-grid/{$sec}/before_section_end",
			'jecf_add_custom_svg_option_to_arrow_control',
			10,
			1
		);
	}
}, 20 );

add_action( 'wp_enqueue_scripts', function () {

	if ( is_admin() ) return;

	wp_enqueue_script(
		'jecf-custom-arrows',
		plugin_dir_url( __FILE__ ) . 'assets/js/custom-arrows.js',
		array(),
		'1.1.1',
		true
	);

	// 🔹Add Your SVGs live in PHP 
	wp_localize_script( 'jecf-custom-arrows', 'JECF_ARROWS', array(
		'prev' => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
		'next' => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	) );
});
