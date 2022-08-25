class LearningPaths {
    constructor
}

const escuelaWeb = new LearningPaths();  
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