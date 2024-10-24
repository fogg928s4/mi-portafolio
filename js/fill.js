const titulo = document.getElementById("title");
const descripcion = document.getElementById("description");
const plataforma = document.getElementById("platform");
const repoL = document.getElementById("repo");


function putData(objID) {
    //writes into it
    titulo.innerHTML = proyectsInfo[objID].title;
    descripcion.innerHTML = proyectsInfo[objID].description;
    plataforma.innerHTML = "Plataforma:\n" + proyectsInfo[objID].Platform;
    repoL.innerHTML = "Enlace al repositorio";
    repoL.href = proyectsInfo[objID].link;
    //and make the request when clicked
    console.log(proyectsInfo[objID].title);
}