class Classe {
    constructor({ name, comment = [], preguntas, recursos}){
        this._name = name,
        this.comment = comment,
        this.preguntas = preguntas,
        this.recursos = recursos
    }

    //getters y setters
    get name(){
      return this._name;
    }
    set name(nuevo_Nombre){
      if(nuevo_Nombre === 'Clase aburrida'){
        console.warn('Web... no')
      }else{
        this._name = nuevo_Nombre;
      }
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
    this._name = name;
    this.classes = classes;
  }

  //getters y setters
  get name(){
    return this._name;
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