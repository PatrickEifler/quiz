'use strict';

const shuffle = (arr) => {
	var copy = arr.slice();
	var len = copy.length;
	var idx;
	var curr;

	while(len) {
		
		//pick one remaining element
		idx = Math.floor(Math.random() * len--);

		//swap it with the current element
		curr = copy[len];
		copy[len] = copy[idx];
		copy[idx] = curr;
	}

	return copy;
}

export default shuffle;