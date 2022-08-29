
//Clase madre
class Student2 {
    //metodo que se ejecuta cuando creamos la instancia del prototipo/clase
    constructor({
        name,
        age,
        email,
        cursosAprobados = [],
    }){
        this.name = name;
        this.age = age;
        this.email = email;
        this.cursosAprobados = cursosAprobados;
    }

    //creamos métodos
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito)
    }
}

class FreeStudent extends Student2 {
    constructor(props){
        super(props);
    }
    aprobarCurso(nuevoCursito){
        if (nuevoCursito.isFree) {
            this.cursosAprobados.push(nuevoCursito);
        }else{
            console.warn(`Lo sentimos ${this.name} solo puedes tomar cursos abiertos :)`);
        }
    }
}

class BasicStudent extends Student2 {
    constructor(props){
        super(props);
    }
    aprobarCurso(nuevoCursito){
        if (nuevoCursito.lang !== 'english') {
            this.cursosAprobados.push(nuevoCursito);
        }else{
            console.warn(`Lo sentimos ${this.name} no puedes tomar cursos en ingles`);
        }
    }
}

class ExpertStudent extends Student2 {
    constructor(props){
        super(props);
    }
    aprobarCurso(nuevoCursito){
            this.cursosAprobados.push(nuevoCursito);
        }
}

const miguelito = new Student2({
    email: 'miguelitogmail.com',
    age: 28,
    name: 'Miguel',
})

console.log(miguelito)

// miguelito.aprobarCurso('Curso de Tableu');

console.log(miguelito.cursosAprobados);
