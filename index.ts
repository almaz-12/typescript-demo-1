// преобразование compile time
let n: number = +"123";

// приведение runtime
const data: unknown = "hello";
const length = (data as string).length; // Говорим TS: "data - это строка"