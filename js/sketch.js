$(document).ready( function() {

	createDivs(16);

});

var createDivs = function (grids) {
	for (var i = 0; i < grids; i++) {
		for (var j = 0; j < grids; j++) {
			var grid = '<div id=' + i + '' + j + '></div>';
			$('#container').append(grid);
		}
	}
}