//Variables
var mainNumber = 0
var infinityNumber = 0
var metaNumber = 0
var normNumMult = 1
var normNumPower = 1
var infNumMult = 1
var infNumPower = 1
var metaNumMult = 1
var metanumPower = 1
//Stage 1: The Beginning
function normNumClick(){
    mainNumber = mainNumber + math.pow((1*normNumMult), normNumPower)
    document.getElementById("mainNumber").innerHTML = "Your number is "+mainNumber+"."
}
//Stage 1.1: Number Click Mult Increments
function numClickMultClick(){
    normNumMult = normNumMult + 1
    document.getElementById("normNumMult").innerHTML = "Your number gain is multiplied by "+normNumMult+"."
}
//stage 1.2: Number Click Power Increments
function numClickPowerClick(){
    normNumPower = normNumPower + 1
    document.getElementById("normNumPower").inner.html = "Your number is being exponentiated by "+normNumPower+"."
}
