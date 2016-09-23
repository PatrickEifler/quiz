export default function isEqual(a,b) {
	let propNamesA = Object.getOwnPropertyNames(a);
	let propNamesB = Object.getOwnPropertyNames(b);

	if (propNamesA.length !== propNamesB.length) { return false; }

	for (var i = 0, l = propNamesA.length; i <= l; i++) {
		var propName = propNamesA[i];
		if (Object.prototype.toString.call(a[propName]) === '[object Object]') {
			if (!(isEqual(a[propName], b[propName]))) { return false; }
		} else {
			return a[propName] === b[propName];
		}
	}

	return false;
}