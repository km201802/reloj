function time() {
    var date = new Date();
    var millis = Math.floor(date.getMilliseconds()/100);
    var seconds = date.getSeconds();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    document.getElementById("demo").innerHTML = hours + ":" + minutes + ":" + seconds + ":" + Math.floor(millis);
    //document.getElementById("milli").innerHTML = Math.floor(r);
}

function fechadma() {
    var date = new Date();
    var days = date.getDay() - 1;
    var monthDay = date.getDate();
    var months = date.getMonth() + 1;
    var years = date.getFullYear();

    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var names = {
       meses: ["Enero", "Febrero", "Marzo", "abril", "mayo", "junio", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
       dias: ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"],
       month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
       days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    }
    document.getElementById("date").innerHTML = name.days[days] + ", " +  + " " + dia30 + ", " + year;
    document.getElementById("date").innerHTML = names.dias[days] + ", " + monthDay + " de " + names.meses[months] + " de " + years;

}


time();
setInterval(time, 50);
fechadma();
setInterval(fechadma, 1000);