
//CONSTRUCTORES

class Paciente {
    #nombre
    #edad
    #rut
    #diagnostico

    constructor(nombre,edad,rut,diagnostico){
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.diagnostico = diagnostico;
    }
    //GETTERS
    get nombre(){
        return this.#nombre
    }
    get edad(){
        return this.#edad
    }
    get rut(){
        return this.#rut
    }
    get diagnostico(){
        return this.#diagnostico
    }
    //SETTERS
    set nombre(value){
        this.#nombre = value
    }
    set edad(value){
        this.#edad = value
    }
    set rut(value){
        this.#rut = value
    }
    set diagnostico(value){
        this.#diagnostico = value
    }
}
class Consultorio {
    #nombre;
    #pacientes;

    constructor(nombre) {
        this.#nombre = nombre
        this.#pacientes = []
    }

    agregarPaciente(Paciente) {
        this.#pacientes.push(Paciente)
    };

    mostrarPacientes() {
        this.#pacientes.forEach((paciente) => {
            console.log(paciente)
        })
    }
}

//Creación de objetos
const Consul1 = new Consultorio('Consultorio Santiago');
const paciente1 = new Paciente("Carlos", 20, "19670222-9", "Migraña");
const paciente2 = new Paciente("Miguel", 40, "19560222-3", "Hipertensión");

Consul1.agregarPaciente(paciente1);
Consul1.agregarPaciente(paciente2);
Consul1.mostrarPacientes();