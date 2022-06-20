
  let cardsName=[
    "bobross",
    "explody",
    "fiesta",
    "metal",
    "revertit",
    "triplets",
    "unicorn"
  ]
  function comparador() { 
    return Math.random() - 0.5; 
  }
// Right number of cards verification
  function verify (howMany){
     if (Number(howMany) >= 4 && Number(howMany) <=14){
   return true;
 }
 false;
}

function isEven(howMany){
if (Number(howMany)%2===0){
    return true;
}
return false;
}

function cartasCorretas (howMany){
  return verify(howMany) && isEven(howMany);
}
function showCards(howMany){
  while (howMany === null || !cartasCorretas(howMany)){
  howMany= prompt("Digite um numero entre 4 e 14");
  }
   alert ("Vamos Jogar!!")
  } 
