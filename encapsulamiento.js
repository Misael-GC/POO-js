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
