const todos = [];
class participante{
    constructor (nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

// VARIABLE PARA EL BOTON DE ENVIAR
let submit = document.getElementById('submit');
// FUNCION PARA EL BOTON DE ENVIAR
submit.addEventListener('click', function(e){
    e.preventDefault();
    console.clear();
    let nombreForm = document.getElementById('name');
    let apellidoForm = document.getElementById('lastName');
    let nombre = nombreForm.value;
    let apellido = apellidoForm.value;
// VERIFICACION DE CAMPOS VACIOS
    if(nombre === ''||apellido === ''){
        console.log('Completa todos los campos')
        return;
    }
// VARIABLE PARA CREACION DE PARTICIPANTE Y PUSHEO AL ARRAY
    const ingresado = new participante(nombre,apellido);
    todos.push(ingresado);
// RESETEO DE FORMULARIO
    nombreForm.value = '';
    apellidoForm.value = '';
    console.log(todos);

// CONFIRMACION DE PARTICIPANTE AGREGADO
    let addExito = document.createElement('div');
    addExito.innerHTML = `<p>Participante agregado con exito</p>`
    addExito.setAttribute('id','agregado');
    document.body.appendChild(addExito);
    setTimeout(() => {
        let limpiarAgregado = document.getElementById('agregado');
        if (limpiarAgregado){
            limpiarAgregado.remove();
        }
    }, 3000);

})
// FUNCION PARA REALIZAR EL SORTEO
let start = document.getElementById('comenzar');
start.addEventListener('click',function(e){
    e.preventDefault();
    let randomParticipante = Math.floor(Math.random() * todos.length);
    let ganador = todos[randomParticipante];

    console.log(`El ganador es ${ganador.nombre} ${ganador.apellido}`);
// MOSTRAR GANADOR EN HTML
    let winnerDiv = document.createElement('div');
    winnerDiv.innerHTML = `<h3>Felicidades ${ganador.nombre} ${ganador.apellido}</h3>`
    winnerDiv.setAttribute('id','congrats');
    document.body.appendChild(winnerDiv);
    
    setTimeout(() => {
        let limpiarGanador = document.getElementById('congrats');
        if (limpiarGanador){
            limpiarGanador.remove();
        }
    }, 5000);
})
// FUNCION PARA RESETEAR EL SORTEO
let reset = document.getElementById('reset');
reset.addEventListener('click', function(e){
    e.preventDefault();
    todos.splice(0,todos.length);
    ganador = undefined;
    console.clear();
    console.log(todos);
})

