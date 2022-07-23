function slowDown(Velocity, printer){
    let decelaration = 20

    while(Velocity > 0){
        printer(Velocity)
        Velocity -= decelaration
    }
    alert("Nave parada. As comportas podem ser abertas.")
}

let spaceshipVelocity = prompt("Digite a velociade da nave")

slowDown(spaceshipVelocity, function(Velocity){
    console.log("Velocidade atual: " + Velocity)
})