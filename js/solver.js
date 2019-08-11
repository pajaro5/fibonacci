
class Solver {
    serie = [];
    constructor(primero, segundo, maximo) {
        this.primero = primero;
        this.segundo = segundo;
        this.maximo = maximo;
    }   

    generarFibonacci(){
        this.serie = [];
        this.serie.push(this.primero);
        this.serie.push(this.segundo);
        return fibonacci(this.serie,this.maximo);
    }
}

function fibonacci(serie,maximo) {
    var ultimo = serie[serie.length-1];
    var anterior = serie[serie.length-2];

    if (ultimo + anterior > maximo) {
        return serie.length
    } else {
        var nuevo = ultimo + anterior;
        serie.push(nuevo);
        return fibonacci(serie,maximo);
    }
}
