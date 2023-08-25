
const token = "6320351732:AAFZH1rHdwIowlRoMOckUrLNNQ236dFvQi4";
const chat_id = "-1001893432449";
const URL_API = `https://api.telegram.org/bot${token}/sendMessage`;

document.getElementById('tg').addEventListener('submit', function(e) {
    e.preventDefault();

// Использование сохраненных данных в message
let message = '<b>Заявка с сайта</b>n';
message += '<b>Отправитель:</b> ' + this.name.value + 'n';
message += '<b>Номер телефона:</b> ' + this.number.value + 'n';

console.log(message);
    
    axios.post(URL_API, {
        chat_id: chat_id,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
      
    })
    .catch((err) => {
      console.log('Erorr404');
    })
    .finally(() => {
        console.log('Konec');
    })
});
var showFormButton = document.getElementById("showFormButton");
var myForm = document.getElementById("tg");

showFormButton.addEventListener("click", function() {
  myForm.style.display = "block";
});
 

// Получаем кнопку по ее идентификатору
var button = document.getElementById('orderButton');

// Получаем кнопку по ее идентификатору
var button = document.getElementById('orderButton');

// Добавляем обработчик события "click" для кнопки
button.addEventListener('click', function() {
  // Выводим сообщение
  alert('Сообщение');
});
