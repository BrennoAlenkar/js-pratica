function buscarCEP() {
    let input = document.getElementById('input').value;
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function () {
        document.querySelector('.teste').innerHTML = this.responseText;

        let obj = JSON.parse(this.responseText);

        let cidade = 
    }
} 
