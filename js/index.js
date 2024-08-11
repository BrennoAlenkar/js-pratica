const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/');
ajax.send();

ajax.onload = function() {
    document.querySelector('.teste').innerHTML = this.responseText
}