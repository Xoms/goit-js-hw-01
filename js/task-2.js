export default function task2(){
    const total = document.querySelector('[name="total"]').value;
    const order = document.querySelector('[name="order"]').value;
    
    Number.parseInt(total) < Number.parseInt(order) ? console.log ("На складе недостаточно товаров!") : 
        console.log("Заказ оформмлен, с вами свяжется менеджер")
}