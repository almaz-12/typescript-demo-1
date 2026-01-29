function getFullName(userEntity: {firstName:string, lastName:string}): string {
  return `${userEntity.firstName} ${userEntity.lastName}`;
}

const user = {
  firstName: 'test',
  lastName: 'name',
  age: 23,
}

getFullName(user);