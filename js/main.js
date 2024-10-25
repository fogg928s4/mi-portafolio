let navBar = document.getElementById("sidebar");
let links = document.getElementsByTagName("a");

//variables from elements
const canva = document.getElementById("canva");



function init() {
    //fill the icon list
    
    for(let i = 0; i<9; i++){
        navBar.innerHTML += "<a id \"" + i + "\"> <img src=\"img/icons/icon" +i + ".png\"/></a>"
        navBar.innerHTML += "<p>" + proyectsInfo[i].title +"</p>";
    }
    //adding event listener to all 
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function(event) {
            
            putData(i);
        }, false);
    }
    //captura.src = "landing.png";
}

window.addEventListener("load", init, false);