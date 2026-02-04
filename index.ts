// 1. простой тип
type ID = number;

// 2. литеральный
type Status = 'pending' | 'cancel';
type Method = 'post' | 'get';


function fetchData(url: string, method: Method, id: ID): 1 | 0  {
	return 1;
}

// 3.
type User = {
	id: number;
	name: string;
	role?: 'admin' | 'manager';
}

const user: User = {
	id: 1,
	name: 'asd',
}