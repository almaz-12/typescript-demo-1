interface User {
	id: number;
	name: string;
	age?: number;
}

interface UserRole {
	role: 'admin' | 'manager';
}

interface UserWithRole extends User,UserRole {}

const user: UserWithRole = {
	id: 1,
	name: 'asd',
	role: 'admin',
}