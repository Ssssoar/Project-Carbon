var power = 0;
var firstPower = true;
/* power costs */
var initialLoadCost = 5
var header1Cost = 20
var header2Cost = 200
var game1_1Cost = 2000
var game1_1Cost = 50
var game1_2Cost = 500
var game1_3Cost = 5000
var game1_4Cost = 5000
var game2_1Cost = 80
var game2_2Cost = 800
var game2_3Cost = 8000
var game2_4Cost = 8000
var game3_1Cost = 110
var game3_2Cost = 1100
var game3_3Cost = 11000
var game3_4Cost = 11000
var game4_1Cost = 140
var game4_2Cost = 1400
var game4_3Cost = 14000
var game4_4Cost = 14000
var game5_1Cost = 170
var game5_2Cost = 1700
var game5_3Cost = 17000
var game5_4Cost = 17000
var game6_1Cost = 200
var game6_2Cost = 2000
var game6_3Cost = 20000
var game6_4Cost = 20000
var game7_1Cost = 230
var game7_2Cost = 2300
var game7_3Cost = 23000
var game7_4Cost = 23000
var game8_1Cost = 260
var game8_2Cost = 2600
var game8_3Cost = 26000
var game8_4Cost = 26000
var game9_1Cost = 290
var game9_2Cost = 2900
var game9_3Cost = 29000
var game9_4Cost = 29000
var game10_1Cost = 320
var game10_2Cost = 3200
var game10_3Cost = 32000
var game10_4Cost = 32000
var game11_1Cost =  350
var game11_2Cost = 3500
var game11_3Cost = 35000
var game11_4Cost = 35000

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
    var cost = document.querySelector("#header1cost")
    if (cost != null){cost.innerHTML = header1Cost;}
    cost = document.querySelector("#header2cost")
    if (cost != null){cost.innerHTML = header2Cost;}
    var cost = document.querySelector("#header3cost")
    if (cost != null){cost.innerHTML = header3Cost;}
    var cost = document.querySelector("#game1_1Cost")
    if (cost != null){cost.innerHTML = game1_1Cost;}
    var cost = document.querySelector("#game1_2Cost")
    if (cost != null){cost.innerHTML = game1_2Cost;}
    var cost = document.querySelector("#game1_3Cost")
    if (cost != null){cost.innerHTML = game1_3Cost;}
    var cost = document.querySelector("#game1_4Cost")
    if (cost != null){cost.innerHTML = game1_4Cost;}
    var cost = document.querySelector("#game2_1Cost")
    if (cost != null){cost.innerHTML = game2_1Cost;}
    var cost = document.querySelector("#game2_2Cost")
    if (cost != null){cost.innerHTML = game2_2Cost;}
    var cost = document.querySelector("#game2_3Cost")
    if (cost != null){cost.innerHTML = game2_2Cost;}
    var cost = document.querySelector("#game2_4Cost")
    if (cost != null){cost.innerHTML = game2_4Cost;}
    var cost = document.querySelector("#game3_1Cost")
    if (cost != null){cost.innerHTML = game3_1Cost;}
    var cost = document.querySelector("#game3_2Cost")
    if (cost != null){cost.innerHTML = game3_2Cost;}
    var cost = document.querySelector("#game3_3Cost")
    if (cost != null){cost.innerHTML = game3_2Cost;}
    var cost = document.querySelector("#game3_4Cost")
    if (cost != null){cost.innerHTML = game3_4Cost;}
    var cost = document.querySelector("#game4_1Cost")
    if (cost != null){cost.innerHTML = game4_1Cost;}
    var cost = document.querySelector("#game4_2Cost")
    if (cost != null){cost.innerHTML = game4_2Cost;}
    var cost = document.querySelector("#game4_3Cost")
    if (cost != null){cost.innerHTML = game4_2Cost;}
    var cost = document.querySelector("#game4_4Cost")
    if (cost != null){cost.innerHTML = game4_4Cost;}
    var cost = document.querySelector("#game5_1Cost")
    if (cost != null){cost.innerHTML = game5_1Cost;}
    var cost = document.querySelector("#game5_2Cost")
    if (cost != null){cost.innerHTML = game5_2Cost;}
    var cost = document.querySelector("#game5_3Cost")
    if (cost != null){cost.innerHTML = game5_2Cost;}
    var cost = document.querySelector("#game5_4Cost")
    if (cost != null){cost.innerHTML = game5_4Cost;}
    var cost = document.querySelector("#game6_1Cost")
    if (cost != null){cost.innerHTML = game6_1Cost;}
    var cost = document.querySelector("#game6_2Cost")
    if (cost != null){cost.innerHTML = game6_2Cost;}
    var cost = document.querySelector("#game6_3Cost")
    if (cost != null){cost.innerHTML = game6_2Cost;}
    var cost = document.querySelector("#game6_4Cost")
    if (cost != null){cost.innerHTML = game6_4Cost;}
    var cost = document.querySelector("#game7_1Cost")
    if (cost != null){cost.innerHTML = game7_1Cost;}
    var cost = document.querySelector("#game7_2Cost")
    if (cost != null){cost.innerHTML = game7_2Cost;}
    var cost = document.querySelector("#game7_3Cost")
    if (cost != null){cost.innerHTML = game7_2Cost;}
    var cost = document.querySelector("#game7_4Cost")
    if (cost != null){cost.innerHTML = game7_4Cost;}
    var cost = document.querySelector("#game8_1Cost")
    if (cost != null){cost.innerHTML = game8_1Cost;}
    var cost = document.querySelector("#game8_2Cost")
    if (cost != null){cost.innerHTML = game8_2Cost;}
    var cost = document.querySelector("#game8_3Cost")
    if (cost != null){cost.innerHTML = game8_2Cost;}
    var cost = document.querySelector("#game8_4Cost")
    if (cost != null){cost.innerHTML = game8_4Cost;}
    var cost = document.querySelector("#game9_1Cost")
    if (cost != null){cost.innerHTML = game9_1Cost;}
    var cost = document.querySelector("#game9_2Cost")
    if (cost != null){cost.innerHTML = game9_2Cost;}
    var cost = document.querySelector("#game9_3Cost")
    if (cost != null){cost.innerHTML = game9_2Cost;}
    var cost = document.querySelector("#game9_4Cost")
    if (cost != null){cost.innerHTML = game9_4Cost;}
    var cost = document.querySelector("#game10_1Cost")
    if (cost != null){cost.innerHTML = game10_1Cost;}
    var cost = document.querySelector("#game10_2Cost")
    if (cost != null){cost.innerHTML = game10_2Cost;}
    var cost = document.querySelector("#game10_3Cost")
    if (cost != null){cost.innerHTML = game10_2Cost;}
    var cost = document.querySelector("#game10_4Cost")
    if (cost != null){cost.innerHTML = game10_4Cost;}
    var cost = document.querySelector("#game11_1Cost")
    if (cost != null){cost.innerHTML = game11_1Cost;}
    var cost = document.querySelector("#game11_2Cost")
    if (cost != null){cost.innerHTML = game11_2Cost;}
    var cost = document.querySelector("#game11_3Cost")
    if (cost != null){cost.innerHTML = game11_2Cost;}
    var cost = document.querySelector("#game11_4Cost")
    if (cost != null){cost.innerHTML = game11_4Cost;}
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
    spendToFill("power", game1_1Cost, header, "fillerhtmls/headers/header-3.html")
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