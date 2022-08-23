javascript:(function () {
	let it = document.querySelectorAll('[data-track-label="todo needs grading"]').values();
	let result = it.next();
	while (!result.done) {
        		result.value.style.display = 'none';
        		result = it.next();
	}

})();
