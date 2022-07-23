let nome = prompt("Qual o seu nome?")
 let velocidade = 0

 let novaVelocidade = prompt("A que velocidade voce gostaria de acelerar?")

 let cofirmVelocidade = confirm ("Estamos acelerando para " + novaVelocidade + "km/s")

 if (cofirmVelocidade){
    velocidade = novaVelocidade
 }

if(velocidade <= 0){
    alert("Nave está parada. considere partir e aumentar a velocidade.")
} else if(velocidade <= 40){
    alert("Voce está devagar. Podemos aumentar mais a velocidade")
} else if (velocidade <= 80){
     alert("Parece uma boa velocidade para manter")
} else if (velocidade >= 100) {
    alert("Velocidade perigosa!!!")
}
    
alert("Piloto " + nome + "\nVelocidade "+ velocidade + "Km/s")