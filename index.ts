function getFullName(firstName: string, lastName:string): string {
  return `${firstName} ${lastName}`;
}

getFullName('test', 'name');

let getFullNameArrow = (firstName: string, lastName:string): string => {
  return `${firstName} ${lastName}`;
}

getFullNameArrow('test', 'name');