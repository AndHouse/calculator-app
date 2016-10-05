function my_max(arr) {
	return arr.sort()[arr.length - 1];
}

function vowel_count(str) {
	var count = 0;
	var pattern = /aeiou/i;
	for ( var i = 0, len = str.length; i < len; i++ ) {
		if ( str[i].search(pattern) !== -1 ) {
			count++;
		}
	}
	return count;
}

function reverse(str) {
	return str.split("").reverse().join("");
}