let distanceInLy = prompt("Digite a distancia em anos-luz")

let chosenOption = prompt("Para qual unidade deseja converter?\n1 - Parsec\n2 - Unidade Astronomica (AU)\n3 - Quilometros (Km)\n\n(Digite o número da opção desejada)")

let chosenUnity

let convertedDistance

switch (chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceInLy * 0.306601
        break
    case "2":
        chosenUnity = "Unidade Astronomica"
        convertedDistance = distanceInLy * 63241.1
        break
    case "3":
        chosenUnity = "Quilometros"
        convertedDistance = distanceInLy * 9.5 *Math.pow(10,12)
        break
        default:
            chosenUnity = "unidade não identidicada"
            convertedDistance = "Conversão fora do escopo"   
}

alert("Distancia em anos luz: " +distanceInLy+ "\n" + chosenUnity + ": "+convertedDistance)