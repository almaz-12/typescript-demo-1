const skills: [number, string] = [1, 'dev'];

const [id, skillName] = skills;

console.log(id); // 1
console.log(skillName); // dev

// так делать можно, но прочитать нельзя
skills.push('test')
skills[2] // тип кортежа длиной 2 не имеет элемент с индексом 2

// неограниченное количество
const skills1: [number, string, ...boolean[]] = [1, 'dev', true, false];