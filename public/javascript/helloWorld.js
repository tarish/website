function showIcons() {
	$("#networks a").hover(function() {
		$(this).effect("bounce", { distance: 25, times: 1 }, "slow" );
	});
}

showIcons();

function hideIcons() {
}