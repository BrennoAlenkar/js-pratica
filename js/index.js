let data = new Date();

let diaSemana = data.getDay();

console.log(diaSemana)

switch (diaSemana) {
    case 0:
        document.querySelector('.teste').innerHTML = 'Domingo'
        break;

    case 1:
        document.querySelector('.teste').innerHTML = 'segunda'
        break;

    case 2:
        document.querySelector('.teste').innerHTML = 'terça'
        break;

    case 3:
        document.querySelector('.teste').innerHTML = 'qaurta'
        break;

    case 4:
        document.querySelector('.teste').innerHTML = 'quinta'
        break;

    case 5:
        document.querySelector('.teste').innerHTML = 'sexta'
        break;

    case 6:
        document.querySelector('.teste').innerHTML = 'sabado'
        break;

    default:
        break;
}