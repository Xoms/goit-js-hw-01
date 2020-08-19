export default function task5(){
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