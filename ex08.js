let spachechip = prompt("Digite o nome da nave")

let invertedName = ""

for (let i = spachechip.length -1; i >= 0; i--){
    if(spachechip[i] == "e"){
        break
    }
    invertedName += spachechip[i]
}
alert("Nome original da nave: " + spachechip + "\nNome invertido: "+ invertedName)
