function ajaxRequest(){
    //creat arr with str for activeX obj
    //first check for older browser cus u just dont know these days
    if (window.XMLHttpRequest){
        return new XMLHttpRequest();
    }
    else 
        return false;
}

//call what we jsut did

let proyectsInfo; //info de los proyectos
let req = new ajaxRequest(); // <= req is request but yknow

req.onreadystatechange = function() {
    if(req.readyState  == 4 && req.status == 200) {
        let jsondata = eval("(" + req.responseText + ")");
        jsondata = JSON.parse(req.responseText); //takes what it got
        proyectsInfo = jsondata.items;
    }
    else {
        alert("Something went wrong during request");
    }
}

req.open("GET", "data/proyectos.json", true);
req.send(null);