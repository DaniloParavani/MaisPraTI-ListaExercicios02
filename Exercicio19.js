// 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
// repetição. Escrever cada um deles no formato HH.MM.SS.

const prompt = require('prompt-sync')();

let horarios = [];

for (let i = 0; i < 5; i++) {
    
    let horario;

    do {
        horario = prompt("Digite o horário no formato HH:MM:SS: ");
        
        if (!validarHorario(horario)) {
            console.log("Horário inválido. Insira no formato HH:MM:SS.");
        }

    } while (!validarHorario(horario));
    
    horarios.push(horario);
}

for (let i = 0; i < horarios.length; i++) {
    console.log(horarios[i]);
}

function validarHorario(horario) {
    
    // É possível fazer com regex
    // let regex = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/;
    // return regex.test(horario);

    const partes = horario.split(":");

    if (partes.length !== 3) {
        return false;
    }

    const hora = parseInt(partes[0]);
    const minuto = parseInt(partes[1]);
    const segundo = parseInt(partes[2]);

    if (hora < 0 || hora > 23 || minuto < 0 || minuto > 59 || segundo < 0 || segundo > 59) {
        return false;
    }

    return true;
}