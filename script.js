var power = 0;
/* power costs */
var initialLoadCost = 5

/*hecharle un solo carbon a la maquina*/
function unCarbon(){
    var meter = document.querySelector("#Power-Meter");
    if (power == 0) {
        var main = document.querySelector("main");
        main.innerHTML =  "<a onclick='initialLoad()'>Cargar! ("+initialLoadCost+" HP)</a>"
    }
    power++;
    meter.innerHTML = power + "HP (Caballos de Fuerza)"
}

function initialLoad(){
    var main = document.querySelector("main");
    spendToFill("power")
}

function spendToFill(resource, cost, selected, fileURL){
    if (spend(resource, cost)){
        fillFromFile(selected, fileURL)
    }
}

function spend(resource, cost){
    var toCheck;
    if (resource == "power"){
        toCheck = power;
    }
    if (toCheck < cost){
        return false;
    }else{
        toCheck-= cost;
        return true;
    }
}

/*function to fill an already selected query from a file given as a string*/
function fillFromFile(selected,fileURL) {
    fetch(fileURL)
    .then(response => response.text())
    .then(textString => {
        selected.innerHTML = textString;
    });
}