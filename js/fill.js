const titulo = document.getElementById("title");
const descripcion = document.getElementById("description");
const plataforma = document.getElementById("platform");
const repoL = document.getElementById("repo");
const captura = document.getElementById("screenshot");
const informacion = document.getElementById("info");

function putData(objID) {
    //writes into it
    titulo.innerHTML = proyectsInfo[objID].title;
    descripcion.innerHTML = proyectsInfo[objID].description;
    captura.src = proyectsInfo[objID].image;
    captura.alt = proyectsInfo[objID].title;
    plataforma.innerHTML = "Plataforma:\n" + proyectsInfo[objID].Platform;
    repoL.innerHTML = "Enlace al repositorio";
    repoL.href = proyectsInfo[objID].link;

    informacion.innerHTML = proyectsInfo[objID].info;

    //and make the request when clicked
    console.log(proyectsInfo[objID].title);
}