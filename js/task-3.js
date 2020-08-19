export default function task3(){
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message = prompt('Введите пароль:');

    if (message === null) {
        message = "Отменено пользователем!";
    } else if (message === ADMIN_PASSWORD) {
        message = "Добро пожаловать!";
    } else message = "Доступ запрещен, неверный пароль";
    alert(message);
}