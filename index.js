
class Classe {
    constructor({ name, comment = [], preguntas, recursos}){
        this.name = name,
        this.comment = comment,
        this.preguntas = preguntas,
        this.recursos = recursos
    }
}

Classe.prototype.addComment = function(newComment){
    this.comment.push(newComment);
}

const classPOO = new Classe({
    name:'Clase de POO',
    comment: ['comentarios_students', 'crear objetos'],
    preguntas:['crear_objetos', 'de_preguntas_students'],
    recursos:'Link'
});
//prototipo de un curso
class Course {
  constructor({ name, classes = [] }) {
    this.name = name;
    this.classes = classes;
  }

  //getters y setters
  get name(){
    return this.name;
  }

  changeName(nuevoNombre){
    this._name = nuevoNombre
  }

  set name(nuevoNombrecito){
    if(nuevoNombrecito === 'Curso Malito de Programación Básica'){
      console.error('Web... no')
    }else{
      this._name = nuevoNombrecito;
    }
  }
  
}


//Instancia de la clase Course

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
});

cursoProgBasica.name
// cursoProgBasica.changeName('newName')
//Curso Gratis de Programación Básica
class LearningPaths {
  constructor({ namePath, cantidadCursos, cursos = [], examen = [] }) {
    this.namePath = namePath;
    this.cantidadCursos = cantidadCursos;
    this.cursos = cursos;
    this.examen = examen;
  }
  //metodo
  addCourse(nuevoCurso) {
    this.cursos.push(nuevoCurso);
  }
  deleteCourse(curretCourse) {
    let indice = this.cursos.indexOf(curretCourse);
    if (indice != -1) this.cursos.splice(indice, 1);
  }
}

const escuelaWeb = new LearningPaths({
  namePath: "Desarrollo Web",
  cantidadCursos: 115,
  cursos: [
    cursoProgBasica,
    "HTML",
    "CSS",
    "JS",
    "REACT",
    "TypeScript",
    "Vue",
    "Angular",
    "Backend",
  ],
});

escuelaWeb.addCourse("Basses de datos");
escuelaWeb.deleteCourse("HTML");

const escuelaData = new LearningPaths({
  namePath: "Data Science",
  cantidadCursos: 35,
  cursos: [
    cursoProgBasica,
    "Python",
    "Excel",
    "SQL",
    "Tableu",
    "BI",
    "MySQL",
    "Datos",
    "Backend",
  ],
});

const escuelaVgs = new LearningPaths({
  namePath: "Escuela de videojuegos",
  cantidadCursos: 95,
  cursos: [
    cursoProgBasica,
    "curso1", 
    "curso2", 
    "curso3"
],
});

//ve a ejecutarlo en consola o has un console.log y corre el plugin .run
console.log(escuelaWeb);
//creamos la clase
class Students {
  constructor({
    name,
    email,
    userName,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.userName = userName;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

//creamos la instancia
const juan2 = new Students({
  name: "JuanDC",
  userName: "juandc",
  email: "juanito@jdc.com",
  twitter: "fjuandc",
  learningPaths: [escuelaWeb, escuelaVgs],
});

const miguelito2 = new Students({
  name: "Miguelito",
  userName: "juandc",
  email: "miguelito@jdc.com",
  instagram: "miguel_feliz",
  learningPaths: [escuelaData, escuelaWeb],
});

console.log(miguelito2);
