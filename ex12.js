let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceship() {
    spaceship.name = prompt("Informe o nome da nave")
    spaceship.type = prompt("Informe o tipo da nave")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade maxima da nave em km/s"))
}

function acelerated() {
    let acceleration = Number(prompt("Qaunto vc quer acelerar? km/s"))
    spaceship.speedUp(acceleration)
    if (spaceship.velocity > spaceship.maxVelocity){
        alert(  "VELOCIDADE MÁXIMA ULTRAPASSADA!" +
                "\nVelocidade da Nave: " + spaceship.velocity + "km/s" +
                "\nVelocidade máxima da Nave: " + spaceship.maxVelocity + "km/s")
    }
}

function stop() {
    alert("Nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\n Velocidade da nave: "+ spaceship.velocity + "\n Máxima da Nave: " + spaceship.maxVelocity)
    spaceship.velocity = 0
}

function showMenu() {
    let chosenOption
    do{
        chosenOption = prompt("Voce deseja: \n1 - Acelerar\n2 - Parar")
        switch(chosenOption) {
            case "1":
                acelerated()
                break
                case "2":
                stop()
                break
                default:
                    alert("Opção Invalida")
        }
    } while(chosenOption !="2")
}

registerSpaceship()
showMenu()