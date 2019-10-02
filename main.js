//Variables
var mainNumber = 0
var infinityNumber = 0
var metaNumber = 0
var normNumMult = 1
var normNumPower = 1
var numClickMult = 1
var infNumMult = 1
var infNumPower = 1
var metaNumMult = 1
var metanumPower = 1
//Stage 1: The Beginning
function normNumClick(){
    mainNumber = mainNumber + 1*numClickMult
    document.getElementById("mainNumber").innerHTML = mainNumber
}
//Stage 1.1: Number Click Mult Increments
function numClickMultClick(){
    numClickMult = numClickMult + 1
    document.getElementById("numClickMult").innerHTML = numClickMult
}