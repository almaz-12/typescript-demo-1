// API возвращает неизвестные данные
const response: unknown = await fetch('/api/data').then(r => r.json());

// Без проверки TypeScript не даст использовать
// response.name ❌ Ошибка: Object is of type 'unknown'

// С проверкой — можно использовать
if (typeof response === 'object' && response !== null && 'name' in response) {
    console.log(response.name); // ✅ Теперь TypeScript знает тип
}


// Еще пример
let val: unknown;

val = 'test';

val.toUpperCase(); // e=Error "val" относится к типу unknown
// то есть без проверки типа мы не можем обратиться к методам.