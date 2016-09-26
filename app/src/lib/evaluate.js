function escapeString(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export default function evaluate(source, testStr) {
	let str = escapeString(source);
	let regex = new RegExp(str, 'i', 'g');
	return regex.test(testStr);
}