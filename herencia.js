//polimorfismo
class Comment{
    constructor({
        content, 
        studentName, 
        studentRole = "estudiante"
    }){
      this.content = content;
      this.studentName = studentName;
      this.studentRole = studentRole;
      this.likes = 0;
    }
  
  //método
    publicar(){
      console.log(this.studentName +" (" + this.studentRole + ")" );
      console.log(this.likes + ' likes');
      console.log(this.content);
      //FrancoPig (estudiante)
      //0 likes
      //este es el comentario
    }
  }




//prototipo de un curso
class Course {
  constructor({ 
    name, 
    classes = [], 
    isFree = false,
    lang = 'spanish',
}) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  //getters y setters
  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (nuevoNombrecito === "Curso Malito de Programación Básica") {
      console.error("Web... no");
    } else {
      this._name = nuevoNombrecito;
    }
  }
}

//Instancia de la clase Course

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
  isFree: true,
});

cursoProgBasica.name;
// cursoProgBasica.changeName('newName')

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML",
  });

const cursoPracticoHTML = new Course({
    name: "Curso de HTML y CSS",
    lang: 'english'
  });





//Clase madre
class Student2 {
  //metodo que se ejecuta cuando creamos la instancia del prototipo/clase
  constructor({ name, age, email, cursosAprobados = [] }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.cursosAprobados = cursosAprobados;
  }

  //creamos métodos
  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }

  publicarComentario(commentContent){
    const comment = new Comment({
        content: commentContent,
        studentName: this.name,
    });
    comment.publicar();
  }
}

class FreeStudent extends Student2 {
  constructor(props) {
    super(props);
  }
  aprobarCurso(nuevoCursito) {
    if (nuevoCursito.isFree) {
      this.cursosAprobados.push(nuevoCursito);
    } else {
      console.warn(
        `Lo sentimos ${this.name} solo puedes tomar cursos abiertos :)`
      );
    }
  }
}

class BasicStudent extends Student2 {
  constructor(props) {
    super(props);
  }
  aprobarCurso(nuevoCursito) {
    if (nuevoCursito.lang !== "english") {
      this.cursosAprobados.push(nuevoCursito);
    } else {
      console.warn(`Lo sentimos ${this.name} no puedes tomar cursos en ingles`);
    }
  }
}

class ExpertStudent extends Student2 {
  constructor(props) {
    super(props);
  }
  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}

class TeacherStudent extends Student2 {
    constructor(props) {
      super(props);
    }
    aprobarCurso(nuevoCursito) {
      this.cursosAprobados.push(nuevoCursito);
    }
    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole:'Profesor',
    });
    comment.publicar();
  }
}

const miguelito = new FreeStudent({
  email: "miguelitogmail.com",
  age: 28,
  name: "Miguel",
});

// console.log(miguelito);

// miguelito.aprobarCurso('Curso de Tableu');

// console.log(miguelito.cursosAprobados);



const juan = new BasicStudent({
    email: "juanitogmail.com",
    age: 28,
    name: "juanDC",
  });

  //creamos a un nuevo estudiante
  const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "fp.asimov@outlook.com",
    twitter: "freddier",
  });