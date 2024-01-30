document.addEventListener('DOMContentLoaded', () => {
    // Se ejecuta cuando el DOM ha sido completamente cargado 
    const display = document.getElementById('result');

    function limpiar() {
        display.value = '';
    }

    function agregarCaracter(caracter) {
        display.value += caracter;
    }

    function calcular() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }

    // Asignamos los eventos a los botones
    document.getElementById('limpiar').addEventListener('click', limpiar);
    document.getElementById('calcular').addEventListener('click', calcular);

    document.getElementById('agregarDivision').addEventListener('click', () => {
        agregarCaracter('/');
    });
    document.getElementById('agregarPorcentaje').addEventListener('click', () => {
        agregarCaracter('%');
    });
    document.getElementById('agregarMultiplicacion').addEventListener('click', () => {
        agregarCaracter('*');
    });
    document.getElementById('agregar7').addEventListener('click', () => {
        agregarCaracter('7');
    });
    document.getElementById('agregar8').addEventListener('click', () => {
        agregarCaracter('8');
    });
    document.getElementById('agregar9').addEventListener('click', () => {
        agregarCaracter('9');
    });
    document.getElementById('agregarSuma').addEventListener('click', () => {
        agregarCaracter('+');
    });
    document.getElementById('agregar4').addEventListener('click', () => {
        agregarCaracter('4');
    });
    document.getElementById('agregar5').addEventListener('click', () => {
        agregarCaracter('5');
    });
    document.getElementById('agregar6').addEventListener('click', () => {
        agregarCaracter('6');
    });
    document.getElementById('agregarResta').addEventListener('click', () => {
        agregarCaracter('-');
    });
    document.getElementById('agregar1').addEventListener('click', () => {
        agregarCaracter('1');
    });
    document.getElementById('agregar2').addEventListener('click', () => {
        agregarCaracter('2');
    });
    document.getElementById('agregar3').addEventListener('click', () => {
        agregarCaracter('3');
    });

    document.getElementById('agregarCero').addEventListener('click', () => {
        agregarCaracter('0');
    });
    document.getElementById('agregarPunto').addEventListener('click', () => {
        agregarCaracter('.');
    });
});