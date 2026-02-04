function logId(id: string | number | boolean) {
	if(typeof id === 'string') {
		id.toUpperCase();
	} else if(typeof id === 'number') {
		console.log(id);
	} else {
		console.log(id);
	}
}

logId(3);

function error(id: string | string[]) {
	if(Array.isArray(id)) {
		console.log(id);
	} else {
		console.log(id);
	}
}

error('3');

function logObject(obj: { a: number } | { b : string}) {
	if('a' in obj) {
		console.log(obj.a);
	} else {
		console.log(obj.b);
	}
}