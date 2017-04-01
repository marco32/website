	autoplay();

	$("#open").click(function() {
	$('.tap-target').tapTarget('open')
});
	$('.carousel').carousel();

	function autoplay() {
		$('.carousel').carousel('next');
		setTimeout(autoplay, 3000);
	}