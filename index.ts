// Пример 1
interface User {
	login: string;
	password?: string;
}

const user: User = {
	login: 'test',
}

// Пример 2
function multiplay(first: number, second?: number): number {
	return first * (second ?? first);
}

multiplay(5);

// Пример 3
interface UserData {
	login: string,
	password?: {
		type: 'admin' | 'manager'
	}
}

function testUser(userData: UserData) {
	return userData.password?.type;
}

// Пример 4
function testNum(num?: number) {
	const a = num ?? 5;
}