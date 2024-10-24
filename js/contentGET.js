//this will helpo us get the data for the projects
//declare variables and objs
let xmlhttp = new XMLHttpRequest();
let proyectsInfo; //info de los proyectos
//just declare for future use in other functions
let jsondata;



//this is for fetching data from the JSON file
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


//to get data
function makerequest(pageData) {
    xmlhttp.open("GET", pageData);

    //check if ready to go
    xmlhttp.onreadystatechange = function () {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText);
            //remember toadd the div where the stuff will go
            canva.innerHTML = xmlhttp.responseText;
        }
    }
    //wont send nun cus why
    xmlhttp.send(null);
}
