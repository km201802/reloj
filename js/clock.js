function time() {
    var fecha = new Date();
    var milli = fecha.getMilliseconds();
    var sec = fecha.getSeconds(); //obtemos los segundos
    var sev; //variable para la condicion 00
    if (sec < 10) {
        sev = "0" + sec; // agregamos un 0 cuando var<10
    } else {
        sev = sec; //si no lo es dejamos el mismo valor
    } //para agregar un 0 cuando es menor que 10 ejem:9 a 09
    var min = fecha.getMinutes(); //obtenemos los minutos
    var miv;
    if (min < 10) {
        miv = "0" + min;
    } else {
        miv = min;
    }
    var hora = fecha.getHours();
    var horav;
    if (hora > 12) {
        hora = hora - 12;
    }
    if (hora < 10) {
        horav = "0" + hora;
    } else {
        horav = hora;
    }
    var millisec = milli / 100;
    var msec = milli / 1000 * 250;
    var colored = sec / 60 * 250;
    //alert(msec);

    document.getElementById("demo").innerHTML = horav + ":" + miv + ":" + sev + ":" + Math.floor(millisec);
    document.getElementById("demo").style.color = "rgb(" + msec + ", " + colored + "," + msec + ")";
    //document.getElementById("milli").innerHTML = Math.floor(r);
}

function fechadma() {
    var fecha = new Date();
    var dia = fecha.getDay() - 1; //dia
    var dia30 = fecha.getDate(); //dia del mes
    var mes = fecha.getMonth() + 1; //mes
    var year = fecha.getFullYear();


    var meses = ["Enero", "Febrero", "Marzo", "abril", "mayo", "junio", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]; //arreglos de dias de semana
    document.getElementById("date").innerHTML = dias[dia] + ", " + dia30 + " de " + meses[mes] + " de " + year;

}

function fechain() {
    var fecha = new Date();
    var dia = fecha.getDay() - 1; //dia
    var dia30 = fecha.getDate(); //dia del mes
    var mes = fecha.getMonth() + 1; //mes
    var year = fecha.getFullYear();

    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    document.getElementById("date").innerHTML = days[dia] + ", " + month[mes] + " " + dia30 + ", " + year;
}
time();
setInterval(time, 50);
fechadma();
setInterval(fechadma, 1000);
