const navBar = document.getElementById("sidebar");
let links = document.getElementsByTagName("a");

//variables from elements
const canva = document.getElementById("canva");

//this will contain the img and the zelda
let itemsMenu = document.getElementsByClassName("menu-items");

function init() {
    //fill the icon list
    
    //first create the buttons
    for(let i = 0; i<proyectsInfo.length; i++){
        //creates a button, that will contain the a and the p
        navBar.innerHTML += "<div class= \"menu-items\">";
        navBar.innerHTML += "</div>";    
    }
    for(let i = 0; i < itemsMenu.length; i++){
        itemsMenu[i].innerHTML += "<a id \"" + i + "\"> <img src=\"img/icons/icon" +i + ".png\"/></a>"
        itemsMenu[i].innerHTML += "<p>" + proyectsInfo[i].title +"</p>";
    }
    
    //adding event listener to all 
    //ik they look like similar loop byt they are not, the former one MUST go first
    for (let i = 0; i < proyectsInfo.length; i++) {
        itemsMenu[i].addEventListener("click", function(event) {
            putData(i);
        }, false);
    }
    
}

window.addEventListener("load", init, false);

//RIP cus u have to enable a server for this to work  due to policy aka LiveServer\
/*
let req = new ajaxRequest();
req.onreadystatechange = function() {
    if(req.readyState  == 4 && req.status == 200) {
        //evaluates before anything
        jsondata = eval("(" + req.responseText + ")");
        //appends to json data
        jsondata = JSON.parse(req.responseText); //takes what it got
        proyectsInfo = jsondata.items;
  
    }
    
}

req.open("GET", "data/proyectos.json", true);
req.send(null);
*/