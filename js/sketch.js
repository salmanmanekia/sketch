$(document).ready( function() {
	createDivs(16);

	$('#reset-btn').click(function(){
		var grid_size = prompt('Please input the grid dimension', 16);
		var node = document.getElementById('grids');
		while (grids.firstChild) {
			grids.removeChild(grids.firstChild);
		}
		createDivs(grid_size);
	});
});


var createDivs = function (grids) {
	var dimen = 25 * 16/grids;

	for (var i = 0; i < grids; i++) {
		for (var j = 0; j < grids; j++) {
			var grid = $('<div class=grid id=' + i + '' + j + '></div>');

			$('#grids').append(grid);
			if (j == 0) {
				$('#grids > div:last').addClass('line-br');
			} 
			$('#grids > div:last').addClass('line');
			$('#grids > div:last').css('width', dimen.toString());
			$('#grids > div:last').css('height', dimen.toString());
		}
	}
	hoverFunc();
}


var hoverFunc = function() {
	$('.grid').hover(
		function() {
			$(this).stop().animate({backgroundColor: "#000000"},"easeInBounce");
		},
		function() {
			$(this).stop().animate({backgroundColor: "#D8D8D8"},"easeInElastic");
		}
	);

}
