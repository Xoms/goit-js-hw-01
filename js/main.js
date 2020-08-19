( ()=> {

    const buttons=document.querySelectorAll("button");

    buttons[0].addEventListener('click', task1);
    buttons[1].addEventListener('click', task2);
    buttons[2].addEventListener('click', task3);
    buttons[3].addEventListener('click', task4);
    buttons[4].addEventListener('click', task5);
    buttons[5].addEventListener('click', task6);

    function task1(){
        const name = "Генератор защитного поля";
        let price = 1000;

        //let outStr = `Выбран ${name}, цена за штуку ${price} кредитов`;
        
        console.log (`Выбран ${name}, цена за штуку ${price} кредитов`);

        price = 2000;

        console.log (`Выбран ${name}, цена за штуку ${price} кредитов`);
    }

    function task2(){
        const total = document.querySelector('[name="total"]').value;
        const order = document.querySelector('[name="order"]').value;
        
        Number.parseInt(total) < Number.parseInt(order) ? console.log ("На складе недостаточно товаров!") : 
            console.log("Заказ оформмлен, с вами свяжется менеджер")
    }

    function task3(){
        const ADMIN_PASSWORD = 'jqueryismyjam';
        let message = prompt('Введите пароль:');

        if (message === null) {
            message = "Отменено пользователем!";
        } else if (message === ADMIN_PASSWORD) {
            message = "Добро пожаловать!";
        } else message = "Доступ запрещен, неверный пароль";
        alert(message);
    }
    
    function task4(){        
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
    function task5(){
        let country = prompt("Введите страну доставки: ");
        let price;
        let compare;

        country && (compare = country.toLowerCase().trim());
        switch (compare){
            case "китай": 
                price = '100 кредитов';
                console.log(`Доставка в ${country} будет стоить ${price}`);
                break;
            case "чили": 
                price = '250 кредитов';
                console.log(`Доставка в ${country} будет стоить ${price}`);
                break;
            case "австралия": 
                price = '170 кредитов';
                console.log(`Доставка в ${country} будет стоить ${price}`);
                break;
            case "индия ": 
                price = '80 кредитов';
                console.log(`Доставка в ${country} будет стоить ${price}`);
                break;
            case "ямайка": 
                price = '120 кредитов';
                console.log(`Доставка в ${country} будет стоить ${price}`);
                break;
            default: 
                console.log ('В вашей стране доставка не доступна');
                break;
        }
    }

    function task6(){
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
})()