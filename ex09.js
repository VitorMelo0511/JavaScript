let spaceshipName = prompt("Digite o nome da nave")

let spaceshipVelocity = 0

let chosenOption

function ShowMenu() {
    let option
    while(option != "1" && option != "2" && option != "3" && option != "4"){
        option = prompt("O que vc deseja fazer?\n" + 
        "1 - Acelerar a nave em 5km/s\n" +
        "2 - Desacelerar a nave em 5km/s\n" +
        "3 - Imprimir dados de bordo\n" +
        "4 - Sair do programa")
    }
    return option
}

function speedUp(velocity){
    let newVelocity = velocity +5
    return newVelocity
}

function speedDown(velocity){
    let newVelocity = velocity -5
    if(newVelocity < 0){
        newVelocity = 0
    }
    return newVelocity
}

function printSpaceshipBoardData(name, velocity){
    alert("Espaçonave: " + name + "\nVelocidade: " + velocity + "Km/s")
}


do {
    chosenOption = ShowMenu()
    switch(chosenOption) {
    case "1":
        spaceshipVelocity = speedUp(spaceshipVelocity) 
        break
    case "2":
        spaceshipVelocity = speedDown(spaceshipVelocity)
        break
    case "3":
       printSpaceshipBoardData(spaceshipName, spaceshipVelocity)
       break  
    default:
        alert("Encerrando programa de bordo")          
    }
} while (chosenOption != "4")