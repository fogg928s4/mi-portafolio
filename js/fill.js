const titulo = document.getElementById("title");
const descripcion = document.getElementById("description");
const plataforma = document.getElementById("platform");
const repoL = document.getElementById("repo");
const captura = document.getElementById("screenshot");
const informacion = document.getElementById("info");
const lenguaje = document.getElementById("language")


function putData(objID) {
    //writes into it the info from the JSON
    //the project titke
    titulo.innerHTML = proyectsInfo[objID].title;
    //project description
    descripcion.innerHTML = proyectsInfo[objID].description;

    //programmin lang used
    lenguaje.src = "img/lang/" + proyectsInfo[objID].language + ".png";
    //info abt 
    informacion.innerHTML = proyectsInfo[objID].info;

    //screenshot and alt text
    captura.src = proyectsInfo[objID].image;
    captura.alt = proyectsInfo[objID].title;

    //platform it works on
    plataforma.innerHTML = "Plataforma:\n" + proyectsInfo[objID].Platform;

   //link to github repo
    repoL.href = proyectsInfo[objID].link;
     
}