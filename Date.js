var fecha = new Date();

console.log(fecha.getDate() + "-" + (fecha.getMonth()+1) +
"-" + (fecha.getYear()+1900));

/*Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */