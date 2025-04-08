var power = 0;
var firstPower = true;
/* power costs */
var initialLoadCost = 5
var header1Cost = 20
var header2Cost = 200
var header3Cost = 2000

setInterval(step,0.5)

function step(){
    meterUpdate();
    updateCosts();
}

/*hecharle un solo carbon a la maquina*/
function unCarbon(){
    if (firstPower) {
        firstPower = false;
        var main = document.querySelector("#main-body");
        main.innerHTML =  "<img src='imgs/tester.jpg' style='margin-left: 25%; width: 50%'><a onclick='initialLoad()'>Cargar! ("+initialLoadCost+" HP)</a>"
    }
    power = power+200;
    meterUpdate();
}
s
function meterUpdate(){
    var meter = document.querySelector("#Power-Meter");
    meter.innerHTML = power + "HP (Caballos de Fuerza)"
}

function updateCosts(){
    var cost1 = document.querySelector("#header1cost")
    if (cost1 != null){cost1.innerHTML = header1Cost;}
    var cost2 = document.querySelector("#header2cost")
    if (cost2 != null){cost2.innerHTML = header2Cost;}
    var cost3 = document.querySelector("#header3cost")
    if (cost3 != null){cost3.innerHTML = header3Cost;}
}

function initialLoad(){
    var main = document.querySelector("#main-body");
    spendToFill("power", initialLoadCost, main, "fillerhtmls/filled-body.html");
}

function loadHeader1(){
    var header = document.querySelector("header");
    spendToFill("power", header1Cost, header, "fillerhtmls/headers/header-1.html")
}

function loadHeader2(){
    var header = document.querySelector("header");
    spendToFill("power", header2Cost, header, "fillerhtmls/headers/header-2.html")
}

function loadHeader3(){
    var header = document.querySelector("header");
    spendToFill("power", header3Cost, header, "fillerhtmls/headers/header-3.html")
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
        if (resource == "power"){
            power = power - cost;
            meterUpdate();
        }   
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