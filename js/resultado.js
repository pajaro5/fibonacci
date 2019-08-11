class Resultado {
    filas = 0;
    columnas = 3;
    tabla;
    constructor(contenedorHTML, datos) {
        this.contenedorHTML = contenedorHTML;
        this.datos = datos;
    }

    dibujarTabla() {
        this.contenedorHTML.innerHTML = "";
        this.filas = Math.ceil(this.datos.length / this.columnas);
        this.tabla = document.createElement("table");
        this.tabla.className = "table";
        this.tabla.id = "tablaResultados";
        llenarTabla(this.tabla, this.datos, this.filas, this.columnas, 0, 0);
        this.contenedorHTML.appendChild(this.tabla);
        this.contenedorHTML.style.display = "block";
    }

    dibujarTabla2() {
        this.contenedorHTML.innerHTML = "";
        this.filas = Math.ceil(this.datos.length / this.columnas);
        this.tabla = document.createElement("table");
        this.tabla.className = "table";
        this.tabla.id = "tablaResultados";

        //llenar tabla usando FOR anidados
        var indice = 0;
        for (let fila = 0; fila < this.filas; fila++) {
            var nuevaFila = document.createElement("tr");
            for (let index = 0; index < this.columnas; index++) {
                var columna = document.createElement("td");
                columna.id = "celda" + indice;
                if (indice < this.datos.length)
                    columna.appendChild(document.createTextNode(this.datos[indice]));
                else
                    columna.appendChild(document.createTextNode(" "));    
                nuevaFila.appendChild(columna);
                indice++;
                this.tabla.appendChild(nuevaFila);
            }
        }
        this.contenedorHTML.appendChild(this.tabla);
        this.contenedorHTML.style.display = "block";
    }
}

function llenarTabla(tabla, datos, filas, columnas, contador, indice) {
    if (contador <= filas) {
        var nuevaFila = document.createElement("tr");
        for (let index = 0; index < columnas; index++) {
            var columna = document.createElement("td");
            columna.id = "celda" + indice;
            if (indice < datos.length)
                columna.appendChild(document.createTextNode(datos[indice]));
            else
                columna.appendChild(document.createTextNode(" "));

            nuevaFila.appendChild(columna);
            indice++;
        }
        tabla.appendChild(nuevaFila);
        contador++;
        return llenarTabla(tabla, datos, filas, columnas, contador, indice);
    }
}
