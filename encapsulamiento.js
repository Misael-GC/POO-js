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




  //Curso Gratis de Programación Básica