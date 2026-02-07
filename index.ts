// Функция, которая ничего не возвращает
function logMessage(message: string): void {
    console.log(`[LOG]: ${message}`);
    // Нет return!
}

// Использование
logMessage("Привет, мир!"); // Выведет в консоль
const result = logMessage("Тест");

// Практическое применение в коллбэках
// когда не надо ничего возвращать

const n = [];

[1,2,3].forEach((el) => n.push(1)) // push возвращает number,  но forEach игнорирует


const testForeach = (arg: number[], callfuc: () => void): void => {
	for (const item of arg) {
			callfuc(); // Нам не важно, что вернёт callback
	}
};