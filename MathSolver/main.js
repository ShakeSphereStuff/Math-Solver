var output = document.getElementById("Text");

function solve(equasion){
  output.innerText += "\n" + String(equasion)
  var solvedForm = equasion.replaceAll(" ", "",).split("+")
  var factor1 = 0
  var factor2 = 0
  console.log(solvedForm)
  console.log(solvedForm[2])
  if(String(solvedForm[0]) !== "x^2" && equasion.length === 3){
    console.log("Not a valid form")
    return
  }
  console.log(solvedForm)
  solvedForm[1] = solvedForm[1].slice(0, -1)
  console.log(solvedForm)
  for(findFactors = Math.floor(solvedForm[1] / 2) ; findFactors > 0 ; findFactors -= 1){
    console.log(String(findFactors) + "*" + String((solvedForm[1]) - findFactors))
    if(findFactors * (parseInt(solvedForm[1]) - findFactors) === parseInt(solvedForm[2])){
      factor1 = findFactors
      factor2 = parseInt(solvedForm[1]) - findFactors
      console.log("Found Equasion:")
      console.log("\t" + String(findFactors) + "*" + String((solvedForm[1]) - findFactors))
      break
    }
  } 
  if(factor1 == 0 && factor2 == 0){
    console.log("Not 2 valid factors")
    return
  }
  solvedForm = "(x + " + String(factor1) + ") + (x + " + String(factor2) + ")"
  output.innerText += "\n" + makeSquare(factor1, factor2)
  console.log(makeSquare(factor1, factor2))
  
  console.log("\n" + String(solvedForm))
  output.innerText += "\n" + solvedForm
  }

solve("x^2 + 16x + 64")

function makeSquare(factorax2, factorbx){
  return "-----x|" + String(factorax2) + "\n" + "x|x^2|" + String(factorax2) + "x" + "\n" + + String(factorbx) + "|" + String(factorbx) + "x|" + String(factorax2 * factorbx)
}
