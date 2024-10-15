function rank(vitorias, derrotas){
    saldoVitorias = vitorias - derrotas

    if (saldoVitorias < 10){
        nivel = 'ferro'
    }else if (11 <= saldoVitorias && saldoVitorias <= 20){
        nivel = 'bronze'
    }else if (21 <= saldoVitorias && saldoVitorias <= 50){
        nivel = 'prata'
    }else if (51 <= saldoVitorias && saldoVitorias <= 80){
        nivel = 'ouro'
    }else if (81 <= saldoVitorias && saldoVitorias <= 90){
        nivel = 'diamante'
    }else if (91 <= saldoVitorias && saldoVitorias <= 100){
        nivel = 'lendário'
    }else{
        nivel = 'imortal'
    }

    console.log(`O herói tem de saldo ${saldoVitorias} e está no nível de ${nivel} `)
}

rank(100, 50);