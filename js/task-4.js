export default function task4(){        
    const pricePerDroid = 3000;
    const qnt = prompt("Какое количество дроидов желаете приобрести?");
    
    let credits = 23580;
    let totalPrice
    let message;

    if (qnt === null) {
        message = "Отменено пользователем!";
        console.log(message);
        return
    } else if (qnt === '' || Number.parseInt(qnt) === NaN) {
        message = "Введите число дроидов цифрами";
        console.log(message);
        return
    } else {
        totalPrice = Number.parseInt(qnt) * pricePerDroid;
        credits -= totalPrice;
        (credits < 0) ? message = "Недостаточно средств на счету" : 
            message = `Вы купили ${qnt} дроидов, на счету осталось ${credits} кредитов`; 
    }
    console.log(message);
}