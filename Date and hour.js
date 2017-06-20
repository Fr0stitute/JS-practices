var tiempo = new Date();
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var dia = weekday[tiempo.getDay()]
console.log("Today is: " + dia + ".");
console.log("Current time is: " + tiempo.getHours() + 
" : " + tiempo.getMinutes() + " : " + tiempo.getSeconds());

//Sample Output : Today is : Friday.
//Current time is : 4 PM : 50 : 22
