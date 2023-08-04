let personas = []

const agregarPersonas = ()=>{
    const nombre = prompt('Ingrese el nombre de la persona');
    const apellido = prompt('Ingrese el apellido de la persona');
    const edad = parseInt(prompt('Ingrese la edad de la persona'));

    const personaExistente = personas.find(p => p.nombre === nombre && p.apellido === apellido && p.edad === edad);
    if (personaExistente) {
      alert("Esta persona ya existe en el array, no se agregará de nuevo.");
    } else {
      personas.push({
        nombre: nombre,
        apellido: apellido,
        edad: edad
      });
      alert(`¡${nombre} ${apellido} ha sido agregado/a al array!`);
    }
}

const cantidadPersonas = ()=>{
    let cantidadDatos = parseInt(prompt("Ingrese el numero de cosas que metera en la caja"));
    if(isNaN(cantidadDatos)){
        alert("Por favor ingrese un valor numerico");
    }
    for (let i = 0; i < cantidadDatos; i++){
        agregarPersonas();
    }
}
cantidadPersonas();

function verPersonas() {
    let mensaje = "Lista de personas:\n \n";
  
    for (let i = 0; i < personas.length; i++) {
      const persona = personas[i];
      mensaje += `Nombre: ${persona.nombre}\n`;
      mensaje += `Apellido: ${persona.apellido}\n`;
      mensaje += `Edad: ${persona.edad}\n\n`;
    }
    alert(mensaje);
}


const eliminarPersona = () => {
    const nombre = prompt('Ingrese el nombre de la persona que desea eliminar');
    const apellido = prompt('Ingrese el apellido de la persona que desea eliminar');
  
    const personasFiltradas = personas.filter(p => p.nombre !== nombre || p.apellido !== apellido);
  
    if (personasFiltradas.length === personas.length) {
      alert("No se encontró ninguna persona con el nombre y apellido ingresados en el array.");
    } else {
      personas = personasFiltradas;
      alert(`Se ha eliminado a la persona con nombre ${nombre} y apellido ${apellido} del array.`);
    }
  };
