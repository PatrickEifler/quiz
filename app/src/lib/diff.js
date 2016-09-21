export default function diff (a, b, predicate) {
	const diffA = a.filter(el => b.filter(elemB => {
	    	return predicate ? predicate(elemB, el) : elemB.uid === el.uid;
	    }).length === 0
	);

	const diffB = b.filter(el => a.filter(elemA => {
	    	return predicate ? predicate(elemA, el) : elemA.uid === el.uid;
	 	}).length === 0
	);

	return diffA.concat(diffB);
}
