function ano_bisiesto(ano) {
    if (ano % 4 != 0) {
        bisiesto = false;
    }
    else if (ano % 100 != 0) {
        bisiesto = true;
    } else if (ano % 400 != 0) {
        bisiesto = false;
    }
    return bisiesto;
}

var ano = 2016;

if (ano_bisiesto(ano) == true) {
    console.log("El año " + ano + " es bisiesto.")
}
else {
    console.log("El año " + ano + " no es bisiesto.")
}

/*if (year is not divisible by 4) then (it is a common year)
 else if (year is not divisible by 100) then (it is a leap year)
 else if (year is not divisible by 400) then (it is a common year)
 else (it is a leap year)*/