/* Responsive modal */
function modal(id) {
	var modal = document.getElementById(id);
	var close = document.querySelectorAll('[data-close="true"]');
	modal.style.display = 'block';
	for (var i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			modal.style.display = 'none';
		}
	}
	window.onclick = function(e){
		if (e.target == modal) {
			modal.style.display = 'none';
		}
	};
	document.onkeydown = function(e) {
		if (e.keyCode == 27) {
			modal.style.display = 'none';
		}
	};
}