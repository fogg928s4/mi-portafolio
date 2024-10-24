let navBar = document.getElementById("sidebar");

function init() {
    //fill the icon list
    for(let i = 0; i<9; i++){
        navBar.innerHTML += "<a> <img src=\"img/icons/icon" +i + ".png\"/></a>"
    }
}

window.addEventListener("load", init, false);