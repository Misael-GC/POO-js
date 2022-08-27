class LearningPaths {
  constructor({ namePath, cantidadCursos, cursos = [], examen = [] }) {
    this._namePath = namePath;
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

  get namePath(){
    return this._namePath;
  }

  set namePath(nuevoNamePath){
    if(nuevoNamePath === 'Random'){
      console.warn('Web... no')
    }else{
      this._name = nuevoNamePath;
    }
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
