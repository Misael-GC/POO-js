class LearningPaths {
    constructor({
        namePath,
        cantidadCursos,
        cursos =[],
        examen =[],
    }){
        this.namePath = namePath;
        this.cantidadCursos = cantidadCursos;
        this.cursos = cursos;
        this.examen = examen;
    }
    //metodo
    addCourse(nuevoCurso){
        this.cursos.push(nuevoCurso)
    }
    deleteCourse(curretCourse){
        let indice = this.cursos.indexOf(curretCourse);
        if(indice != -1)
        this.cursos.splice(indice, 1);
    }
}



const escuelaWeb = new LearningPaths({
    namePath:'Desarrollo Web',
    cantidadCursos: 115,
    cursos: ['HTML', 'CSS', 'JS', 'REACT', 'TypeScript', 'Vue',  'Angular', 'Backend']
});
const escuelaData = new LearningPaths();
const escuelaVgs = new LearningPaths();
//creamos la clase
class Student {
    constructor({
        name,
        email,
        userName,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    })
    {
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
const juan2 = new Student({
    name: 'JuanDC',
    userName: 'juandc',
    email: 'juanito@jdc.com',
    twitter: 'fjuandc',
    learningPaths:[
        escuelaWeb,
        escuelaVgs
    ]
})

const miguelito2 = new Student({
    name: 'Miguelito',
    userName: 'juandc',
    email: 'miguelito@jdc.com',
    instagram: 'miguel_feliz',
    learningPaths:[
        escuelaData,
        escuelaWeb
    ]
})