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