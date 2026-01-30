const skills: readonly [number, {name: string}] = [1, {name: 'dev'}];

const [id, skillName] = skills;

console.log(id); // 1
console.log(skillName); // {name: 'dev'}

// не получится сделать с readonly
skills.push('test')

// !!! не работает для вложенного объекта
skills[1].name = 'another'