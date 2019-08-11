//declaro variables globales
var serie;
var primerElemento;
var segundoElemento;
var valorMaximo;
var botonGenerar = document.getElementById("generar");
var botonGenerar2 = document.getElementById("generar2");
var botonLimpiar = document.getElementById("limpiar");
var divSolucion = document.getElementById("solucion");
var resultado;

//Inicio
divSolucion.style.display = "none"; //de inicio no se muestra la solución

//logica del botón Generar,  usando función recursiva
botonGenerar.addEventListener("click",function(){
   obtenerDatos(); //obtengo datos ingresados por el usuario
   serie = new Solver(primerElemento,segundoElemento,valorMaximo); //creo nueva instancia de la clase Solver, le paso los datos ingresados por el usuario.
   serie.generarFibonacci();  //ejecuto método para generar la serie.
   resultado = new Resultado(divSolucion,serie.serie);
   resultado.dibujarTabla();
   
});

//logica del botón Generar,  usando FOR anidados
botonGenerar2.addEventListener("click",function(){
    obtenerDatos(); //obtengo datos ingresados por el usuario
    serie = new Solver(primerElemento,segundoElemento,valorMaximo); //creo nueva instancia de la clase Solver, le paso los datos ingresados por el usuario.
    serie.generarFibonacci();  //ejecuto método para generar la serie.
    resultado = new Resultado(divSolucion,serie.serie);
    resultado.dibujarTabla2();
 });

 botonLimpiar.addEventListener("click",function() {
     divSolucion.innerHTML = "";
 })

function obtenerDatos() {
    primerElemento = parseInt(document.getElementById("primero").value);
    segundoElemento = parseInt(document.getElementById("segundo").value);
    valorMaximo = parseInt(document.getElementById("maximo").value);
}

