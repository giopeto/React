function counter(state = 0, action) {

	if (action.type === 'INCREMENT') {
		return state + 1;
	} else if (action.type === 'DECREMENT') {
		return state - 1;
	} else {
		return state;
	}
}

function verify(expected, actual) {
	console.assert(expected === actual, expected + ' is not equal to: ' + actual);
}

verify(1, counter(0, {type: 'INCREMENT'}));

verify(2, counter(1, {type: 'INCREMENT'}));

verify(1, counter(2, {type: 'DECREMENT'}));

verify(0, counter(1, {type: 'DECREMENT'}));

verify(0, counter(0, {type: 'SOMETHING_OTHER'}));

verify(0, counter(undefined, {}));