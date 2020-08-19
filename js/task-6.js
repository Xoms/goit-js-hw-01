export default function task6(){
    let num = prompt("Введите число:");
    console.log(num);
    let total = 0;
    while (num !== null) {
        console.log("Вы ввели: " + num);
        if (!isNaN(num)) {
            total += Number.parseInt(num);
            console.log ("total = " + total);
            num = prompt("Введите число:");
        } else {
            console.log("Введите число");
            num = prompt("Введите число:");
        }
    }
    alert(`Общая сумма чисел = ${total}`);
}