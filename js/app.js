const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'Lara')
];
const personaObj = [
    { nombre: 'Juan', apellido: 'Perez'},
    { nombre: 'Karla', apellido: 'Lara'}
]
function mostrarPersonas(){
    console.log('Mostrar personas...');
    let texto = '';
    for(let persona of personaObj){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre.value != '' && apellido.value != ''){
        //const persona = new Persona(nombre.value, apellido.value);
        const persona = { nombre:nombre.value, apellido:apellido.value};
        console.log(persona);
        personaObj.push(persona);
        mostrarPersonas();
    }
    else{
        console.log('No hay información que agregar');
    }
}