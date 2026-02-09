// Функция возвращает boolean
function isString(value: any): value is string {
    return typeof value === "string";
}

function process(value: string | number) {
    if (isString(value)) {
        // value: string
        console.log(value.length);
    } else {
        // value: number
        console.log(value * 2);
    }
}