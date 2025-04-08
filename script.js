var power = 0;

/*hecharle un solo carbon a la maquina*/
function unCarbon(){
    var meter = document.querySelector("#Power-Meter");
    power++;
    meter.innerHTML = power + " Caballos de Fuerza"
}

/*function to fill an already selected query from a file given as a string*/
function fillFromFile(selected,fileURL) {
    fetch(fileURL)
    .then(response => response.text())
    .then(textString => {
        selected.innerHTML = textString;
    });
}