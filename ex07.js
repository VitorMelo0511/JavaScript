let spaceship = prompt("Digite o nome da nave")

let charToReplace = prompt("Qual caracter voce deseja substituir?")

let replacecementChar = prompt("Por qual caracter vc deseja substituir?")

let newSpaceship = ""

for (let pos = 0; pos < spaceship.length; pos++) {
    if(spaceship[pos] == charToReplace) {
        newSpaceship += replacecementChar
    } else {
        newSpaceship += spaceship[pos]
    }
}

alert(newSpaceship)