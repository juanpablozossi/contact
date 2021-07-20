function capturar(){
  //console.log('Capturado')
  function Persona(nombre, edad, direccion, telefono){
    this.nombre = nombre
    this.edad = edad
    this.direccion = direccion
    this.telefono = telefono
  }
  var nombreCapturar = document.getElementById('nombre').value;
  var edadCapturar = document.getElementById('edad').value;
  var direccionCapturar = document.getElementById('direccion').value;
  var telefonoCapturar = document.getElementById('telefono').value;
  
  nuevoSujeto = new Persona(nombreCapturar, edadCapturar, direccionCapturar, telefonoCapturar)
  //console.log(nuevoSujeto)
  agregar()
}

function agregar(){
  var baseDatos = []
  baseDatos.push(nuevoSujeto)
  //console.log(baseDatos)
  document.getElementById('tabla').innerHTML += `
  <tbody><td>${nuevoSujeto.nombre}</td><td>${nuevoSujeto.edad}</td><td>${nuevoSujeto.direccion}</td><td>${nuevoSujeto.telefono}</td></tbody>
  `
}
