var power = 0;
var firstMoney = true;
var firstPower = true;
var money = 0;
var duendes = 0;
var duendePower = 0.2;
var styleMax = 5;
var styleLvls = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
/* power costs */
var initialLoadCost = 5
var header1Cost = 20
var header2Cost = 200
var header3Cost = 20
var introText1Cost = 40
var introText2Cost = 400
var introText3Cost = 4000
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
var exchangeRate = 0.1
var duendeCost = 1
var duendeCostIncrease = 1
var styleCost = 10
var styleCostIncrease = 20
var delay = 50

setInterval(step,100)

//update cycle function
function step(){
    duendeShovel();
    meterUpdate();
    updateCosts();
    doDelay();
}

//shoot an alert after 5 seconds
function doDelay(){
    if (delay >= 0){
        delay --;
    }
    if (delay == 0){
        alert("HAY QUE ECHARLE CARBÓN A LA MÁQUINA!!!!!!")
    }

}

//whenever you buy a new style this function is fired
function buyStyle(index){
    var selector;
    //selector of the html tags to change gets made
    if ((index >= 0)&&(index <=10)){
        selector = "#game" + (index+1)
    }else if (index == 11){
        selector = "header"
    }else if (index == 12){
        selector = "body,#main-body,main"
    }else if (index == 13){
        selector = "footer"
    }else if (index == 14){
        selector = "nav"
    }
    //check what level of style we're on
    if (styleLvls[index] < styleMax){
        if (money >= styleCost){
            money -= styleCost;
            styleCost += styleCostIncrease;
            styleCostIncrease *= 1.01;
            var selecteds = document.querySelectorAll(selector);
            selecteds.forEach((selected) => {
                if (styleLvls[index] != 0){
                    selected.classList.remove("style"+styleLvls[index])
                    }
                selected.classList.add("style"+(styleLvls[index]+1))
            });
            styleLvls[index]++;
            console.log(styleLvls[index]);
            console.log(styleMax);
            if (styleLvls[index] >= styleMax){
                document.querySelector("#Button"+index).remove();
            }
        }
    }
}

//throw a single coal in the machine
function unCarbon(){
    if (firstPower) {
        firstPower = false;
        var main = document.querySelector("#main-body");
        main.innerHTML =  "<img src='assets/loading.gif' style='margin-left: 25%; width: 50%'><button onclick='initialLoad()'>Cargar! ("+initialLoadCost+" HP)</button>"
    }
    power = power+1;
    meterUpdate();
}

//click the o to get infinite money
function CHEATS(){
    power = power+10000000
    money = money+10000000
    duendes = duendes+100000000
}

//run every cycle, increases the ammount of power depending on the ammount of duendes hired
function duendeShovel(){
    power += duendes * duendePower;
}

//run every cycle, updates ammounts of money, it finds the correct places to place the numbers by using the ids that spans have
function meterUpdate(){
    var meter = document.querySelector("#Power-Meter");
    meter.innerHTML = power.toFixed(2) + "HP (Caballos de Fuerza)";
    var meter = document.querySelector("#Money-Meter");
    if (money == 0){
        meter.innerHTML = ""
    }else{
        meter.innerHTML = "$"+money
    }
    var meter = document.querySelector("#Duende-Meter");
    if (duendes == 0){
        meter.innerHTML = ""
    }else{
        meter.innerHTML = duendes + " Duendes Contratados. "
        meter.innerHTML += "(Generan "+ (duendes * duendePower * 10).toFixed(2) + "HP/segundo)"
    }
}

//finds spans to update them to the correct number for the cost of things
function updateCosts(){
    var cost = document.querySelector("#header1cost")
    if (cost != null){cost.innerHTML = header1Cost;}
    var cost = document.querySelector("#header2cost")
    if (cost != null){cost.innerHTML = header2Cost;}
    var cost = document.querySelector("#header3cost")
    if (cost != null){cost.innerHTML = header3Cost;}
    var cost = document.querySelector("#introtext1cost")
    if (cost != null){cost.innerHTML = introText1Cost;}
    var cost = document.querySelector("#introtext2cost")
    if (cost != null){cost.innerHTML = introText2Cost;}
    var cost = document.querySelector("#introtext3cost")
    if (cost != null){cost.innerHTML = introText3Cost;}
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
    var cost = document.querySelector("#exchange-rate")
    if (cost != null){cost.innerHTML = exchangeRate;}
    var cost = document.querySelector("#duende-cost")
    if (cost != null){cost.innerHTML = duendeCost;}
    var cost = document.querySelector("#StyleCost")
    if (cost != null){cost.innerHTML = styleCost.toFixed(2);}
}

//turns your power into money
function getMoney(){
    money += power * exchangeRate;
    money = Number(money.toFixed(2))
    power = 0;
    //if this is the first money you're getting, spawns a bunch of buttons
    if (firstMoney){
        firstMoney = false;
        var nav = document.querySelector("nav");
        nav.innerHTML += "<button onClick='hireDuende()'> Contratar a un duende! ($<span id='duende-cost'>__</span>)</button>"
        nav.innerHTML += "<button onclick='buyStyle(12)' id='Button12'>Mejorar estilo del cuerpo de la pagina!</button>"
        nav.innerHTML += "<button onclick='buyStyle(14)' id='Button14'>Mejorar estilo de esta parte!</button>"
        nav.innerHTML += "<p>Mejorar estilos cuesta $<span id='StyleCost'>__</span></p>"
    }
}

//hire a duende to shovel money for you
function hireDuende(){
    if (money >= duendeCost){
        duendes++;
        money -= duendeCost;
        money = Number(money.toFixed(2))
        duendeCost += Math.floor(duendeCostIncrease);
        duendeCostIncrease *= 1.1;
    }
}

// #region content loaders 
function initialLoad(){
    var main = document.querySelector("#main-body");
    if (spendToFill("power", initialLoadCost, main, "fillerhtmls/filled-body.html")){
        var nav = document.querySelector("nav");
        nav.innerHTML += "<button onClick='getMoney()'>Convertir el poder en dinero! ($<span id='exchange-rate'>__</span> por HP)</button>";
    }

}

function loadHeader1(){
    var header = document.querySelector("header");
    if (spendToFill("power", header1Cost, header, "fillerhtmls/headers/header-1.html")){
        var nav = document.querySelector("nav")
        nav.innerHTML += "<button onclick='buyStyle(11)' id='Button11'>Mejorar estilo del Header!</button>"
    }
}

function loadHeader2(){
    var header = document.querySelector("header");
    spendToFill("power", header2Cost, header, "fillerhtmls/headers/header-2.html")
}

function loadHeader3(){
    var header = document.querySelector("header");
    spendToFill("power", header3Cost, header, "fillerhtmls/headers/header-3.html");
}

function loadIntro1(){
    var intro = document.querySelector("#introSpace");
    spendToFill("power", introText1Cost, intro, "fillerhtmls/introtext/intro-1.html")
}

function loadIntro2(){
    var intro = document.querySelector("#introSpace");
    spendToFill("power", introText2Cost, intro, "fillerhtmls/introtext/intro-2.html")
}

function loadIntro3(){
    var intro = document.querySelector("#introSpace");
    spendToFill("power", introText3Cost, intro, "fillerhtmls/introtext/intro-3.html")
}

function loadGame1_1(){
    var game1 = document.querySelector("#game1");
    if (spendToFill("power", game1_1Cost, game1, "fillerhtmls/games/game1/name-only.html")){
        var body = document.querySelector("main");
        addFromFile(body,"fillerhtmls/games/game2/starter.html")
        var nav = document.querySelector("nav")
        nav.innerHTML += "<button onclick='buyStyle(0)' id='Button0'>Mejorar estilo del Juego 1!</button>"
    }
}

function loadGame1_2(){
    var game1 = document.querySelector("#game1");
    spendToFill("power", game1_2Cost, game1, "fillerhtmls/games/game1/desc1.html");
}

function loadGame1_3(){
    var game1 = document.querySelector("#game1");
    spendToFill("power", game1_3Cost, game1, "fillerhtmls/games/game1/desc2.html");
}

function loadGame1_4(){
    var game1 = document.querySelector("#game1");
    spendToFill("power", game1_3Cost, game1, "fillerhtmls/games/game1/full.html");
}

function loadGame2_1(){
    var game1 = document.querySelector("#game2");
    if (spendToFill("power", game2_1Cost, game2, "fillerhtmls/games/game2/name-only.html")){
        var body = document.querySelector("main");
        addFromFile(body,"fillerhtmls/games/game3/starter.html")
        var nav = document.querySelector("nav")
        nav.innerHTML += "<button onclick='buyStyle(1)' id='Button1'>Mejorar estilo del Juego 2!</button>"
    }
}

function loadGame2_2(){
    var game2 = document.querySelector("#game2");
    spendToFill("power", game2_2Cost, game2, "fillerhtmls/games/game2/desc1.html");
}

function loadGame2_3(){
    var game2 = document.querySelector("#game2");
    spendToFill("power", game2_3Cost, game2, "fillerhtmls/games/game2/desc2.html");
}

function loadGame2_4(){
    var game2 = document.querySelector("#game2");
    spendToFill("power", game2_3Cost, game2, "fillerhtmls/games/game2/full.html");
}

function loadGame3_1(){
    var game3 = document.querySelector("#game3");
    if (spendToFill("power", game3_1Cost, game3, "fillerhtmls/games/game3/name-only.html")){
        var body = document.querySelector("main");
        addFromFile(body,"fillerhtmls/games/game4/starter.html")
        var nav = document.querySelector("nav")
        nav.innerHTML += "<button onclick='buyStyle(2)' id='Button2'>Mejorar estilo del Juego 3!</button>"
    }
}

function loadGame3_2(){
    var game3 = document.querySelector("#game3");
    spendToFill("power", game3_2Cost, game3, "fillerhtmls/games/game3/desc1.html");
}

function loadGame3_3(){
    var game3 = document.querySelector("#game3");
    spendToFill("power", game3_3Cost, game3, "fillerhtmls/games/game3/desc2.html");
}

function loadGame3_4(){
    var game3 = document.querySelector("#game3");
    spendToFill("power", game3_3Cost, game3, "fillerhtmls/games/game3/full.html");
}

function loadGame4_1(){
    var game4 = document.querySelector("#game4");
    if (spendToFill("power", game4_1Cost, game4, "fillerhtmls/games/game4/name-only.html")){
        var body = document.querySelector("main");
        addFromFile(body,"fillerhtmls/games/game5/starter.html")
        var nav = document.querySelector("nav")
        nav.innerHTML += "<button onclick='buyStyle(3)' id='Button3'>Mejorar estilo del Juego 4!</button>"
    }
}

function loadGame4_2(){
    var game4 = document.querySelector("#game4");
    spendToFill("power", game4_2Cost, game4, "fillerhtmls/games/game4/desc1.html");
}

function loadGame4_3(){
    var game4 = document.querySelector("#game4");
    spendToFill("power", game4_3Cost, game4, "fillerhtmls/games/game4/desc2.html");
}

function loadGame4_4(){
    var game4 = document.querySelector("#game4");
    spendToFill("power", game4_3Cost, game4, "fillerhtmls/games/game4/full.html");
}

function loadGame5_1(){
    var game5 = document.querySelector("#game5");
    if (spendToFill("power", game5_1Cost, game5, "fillerhtmls/games/game5/name-only.html")){
        var body = document.querySelector("main");
        addFromFile(body,"fillerhtmls/games/game6/starter.html")
        var nav = document.querySelector("nav")
        nav.innerHTML += "<button onclick='buyStyle(4)' id='Button4'>Mejorar estilo del Juego 5!</button>"
    }
}

function loadGame5_2(){
    var game5 = document.querySelector("#game5");
    spendToFill("power", game5_2Cost, game5, "fillerhtmls/games/game5/desc1.html");
}

function loadGame5_3(){
    var game5 = document.querySelector("#game5");
    spendToFill("power", game5_3Cost, game5, "fillerhtmls/games/game5/desc2.html");
}

function loadGame5_4(){
    var game5 = document.querySelector("#game5");
    spendToFill("power", game5_3Cost, game5, "fillerhtmls/games/game5/full.html");
}

function loadGame6_1(){
    var game6 = document.querySelector("#game6");
    if (spendToFill("power", game6_1Cost, game6, "fillerhtmls/games/game6/name-only.html")){
        var body = document.querySelector("main");
        addFromFile(body,"fillerhtmls/games/game7/starter.html")
        var nav = document.querySelector("nav")
        nav.innerHTML += "<button onclick='buyStyle(5)' id='Button5'>Mejorar estilo del Juego 6!</button>"
    }
}

function loadGame6_2(){
    var game6 = document.querySelector("#game6");
    spendToFill("power", game6_2Cost, game6, "fillerhtmls/games/game6/desc1.html");
}

function loadGame6_3(){
    var game6 = document.querySelector("#game6");
    spendToFill("power", game6_3Cost, game6, "fillerhtmls/games/game6/desc2.html");
}

function loadGame6_4(){
    var game6 = document.querySelector("#game6");
    spendToFill("power", game6_3Cost, game6, "fillerhtmls/games/game6/full.html");
}

function loadGame7_1(){
    var game7 = document.querySelector("#game7");
    if (spendToFill("power", game7_1Cost, game7, "fillerhtmls/games/game7/name-only.html")){
        var body = document.querySelector("main");
        addFromFile(body,"fillerhtmls/games/game8/starter.html")
        var nav = document.querySelector("nav")
        nav.innerHTML += "<button onclick='buyStyle(6)' id='Button6'>Mejorar estilo del Juego 7!</button>"
    }
}

function loadGame7_2(){
    var game7 = document.querySelector("#game7");
    spendToFill("power", game7_2Cost, game7, "fillerhtmls/games/game7/desc1.html");
}

function loadGame7_3(){
    var game7 = document.querySelector("#game7");
    spendToFill("power", game7_3Cost, game7, "fillerhtmls/games/game7/desc2.html");
}

function loadGame7_4(){
    var game7 = document.querySelector("#game7");
    spendToFill("power", game7_3Cost, game7, "fillerhtmls/games/game7/full.html");
}

function loadGame8_1(){
    var game8 = document.querySelector("#game8");
    if (spendToFill("power", game8_1Cost, game8, "fillerhtmls/games/game8/name-only.html")){
        var body = document.querySelector("main");
        addFromFile(body,"fillerhtmls/games/game9/starter.html")
        var nav = document.querySelector("nav")
        nav.innerHTML += "<button onclick='buyStyle(7)' id='Button7'>Mejorar estilo del Juego 8!</button>"
    }
}

function loadGame8_2(){
    var game8 = document.querySelector("#game8");
    spendToFill("power", game8_2Cost, game8, "fillerhtmls/games/game8/desc1.html");
}

function loadGame8_3(){
    var game8 = document.querySelector("#game8");
    spendToFill("power", game8_3Cost, game8, "fillerhtmls/games/game8/desc2.html");
}

function loadGame8_4(){
    var game8 = document.querySelector("#game8");
    spendToFill("power", game8_3Cost, game8, "fillerhtmls/games/game8/full.html");
}

function loadGame9_1(){
    var game9 = document.querySelector("#game9");
    if (spendToFill("power", game9_1Cost, game9, "fillerhtmls/games/game9/name-only.html")){
        var body = document.querySelector("main");
        addFromFile(body,"fillerhtmls/games/game10/starter.html")
        var nav = document.querySelector("nav")
        nav.innerHTML += "<button onclick='buyStyle(8)' id='Button8'>Mejorar estilo del Juego 9!</button>"
    }
}

function loadGame9_2(){
    var game9 = document.querySelector("#game9");
    spendToFill("power", game9_2Cost, game9, "fillerhtmls/games/game9/desc1.html");
}

function loadGame9_3(){
    var game9 = document.querySelector("#game9");
    spendToFill("power", game9_3Cost, game9, "fillerhtmls/games/game9/desc2.html");
}

function loadGame9_4(){
    var game9 = document.querySelector("#game9");
    spendToFill("power", game9_3Cost, game9, "fillerhtmls/games/game9/full.html");
}

function loadGame10_1(){
    var game10 = document.querySelector("#game10");
    if (spendToFill("power", game10_1Cost, game10, "fillerhtmls/games/game10/name-only.html")){
        var body = document.querySelector("main");
        addFromFile(body,"fillerhtmls/games/game11/starter.html")
        var nav = document.querySelector("nav")
        nav.innerHTML += "<button onclick='buyStyle(9)' id='Button9'>Mejorar estilo del Juego 10!</button>"
    }
}

function loadGame10_2(){
    var game10 = document.querySelector("#game10");
    spendToFill("power", game10_2Cost, game10, "fillerhtmls/games/game10/desc1.html");
}

function loadGame10_3(){
    var game10 = document.querySelector("#game10");
    spendToFill("power", game10_3Cost, game10, "fillerhtmls/games/game10/desc2.html");
}

function loadGame10_4(){
    var game10 = document.querySelector("#game10");
    spendToFill("power", game10_3Cost, game10, "fillerhtmls/games/game10/full.html");
}

function loadGame11_1(){
    var game11 = document.querySelector("#game11");
    spendToFill("power", game11_1Cost, game11, "fillerhtmls/games/game11/name-only.html")
    var nav = document.querySelector("nav")
    nav.innerHTML += "<button onclick='buyStyle(10)' id='Button10'>Mejorar estilo del Juego 11!</button>"
}

function loadGame11_2(){
    var game11 = document.querySelector("#game11");
    spendToFill("power", game11_2Cost, game11, "fillerhtmls/games/game11/desc1.html");
}

function loadGame11_3(){
    var game11 = document.querySelector("#game11");
    spendToFill("power", game11_3Cost, game11, "fillerhtmls/games/game11/desc2.html");
}

function loadGame11_4(){
    var game11 = document.querySelector("#game11");
    spendToFill("power", game11_3Cost, game11, "fillerhtmls/games/game11/full.html");
}
// #endregion

//pass it a resource, how much you're trying to spend, a selection in the DOM and a file, and it will check if you have enough of the given resource
//and if so, it will spend it, and fill the DOM selection with the content from the file
function spendToFill(resource, cost, selected, fileURL){
    if (spend(resource, cost)){
        fillFromFile(selected, fileURL);
        return true;
    }
    return false;
}

//give it a resource and a cost, and it will subtract the ammount of the resource if it's possible and return true, else false
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

//same as the previous but it appends rather than replacing
function addFromFile(selected,fileURL){
    fetch(fileURL)
    .then(response => response.text())
    .then(textString => {
        selected.innerHTML += textString;
    });
}