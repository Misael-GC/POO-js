// objecto lineral
const natalia = {
    name: 'Natalia',
    age:20,
    cursosAprobados:[
        'Curso Definitivo de HTML y CSS',
        'Curso Práctico de HTML y CSS',
    ],
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    },
};

natalia.aprobarCurso('Curso de CSS Grid');

console.log(natalia);


//Prototipo
function Student(name, age, cursosAprobados){
    this._name = name;
    this.age = age;
    this._cursosAprobados = cursosAprobados;
    //método 1 forma de crearlo
    // this.aprobarCurso = function(nuevoCurso){
    //     this.cursosAprobados.push(nuevoCurso);
    // }
}

//otra forma de agregar métodos
Student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);

Student.prototype = {
    get name(){
        return this._name;
    },
    set name(nuevo_Nombre_student){
        if (nuevo_Nombre_student === 'Random') {
            console.warn('nombre no permitido');
        } else {
            this._name = nuevo_Nombre_student;
        }
    }
}
}

//Instancias del prototipo

const reyna = new Student(
    'Reyna Alejandra',
    23,
    [
        'Int a los videojuego',
        'Creación de personajes',
    ]
);


reyna.aprobarCurso("Curso de Unreal Engine");

console.log(reyna);




