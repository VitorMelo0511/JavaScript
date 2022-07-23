let warpCount = 0
let chosenOption = ""

let spacechipName = prompt("Digite nome da sua nave")

chosenOption = prompt("Deseja entrar em dobra espacial?\n1 - Sim\n2 - Não")

while(chosenOption == "1"){
    warpCount += 1
    chosenOption = prompt("Deseja realizar a próxima dobra?\n1 - Sim\n2 - Não")  
}

alert("Nave: "+ spacechipName+ "\nQuantidade de dobras: " +warpCount)