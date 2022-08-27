//estas 2 funciones deben ir fuera de la clase 
function videoPlay(id){
    const urlSecreta = "https://platziurlsecreto.com/" + id;
    //como no existe el video hacemos consolelog
    console.log("Se esta reproduciendo: " + urlSecreta);
  }
  
  function videoStop(id){
    const urlSecreta = "https://platziurlsecreto.com/" + id;
    console.log("Pausamos: " + urlSecreta);
  }

export class PlatziClass {
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }
    //metodos
    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStop(this.videoID);
    }
}