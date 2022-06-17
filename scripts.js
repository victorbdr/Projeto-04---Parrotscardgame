
  let howMany = Number(prompt("Com quantas cartas quer jogar?"));
  function verify (){
     if (howMany >= 4 && howMany <=12){
   return true;
 }
 false;
}
function isEven(howMany){
if (howMany%2 == 0){
    true;
}
false;
}
function showCards(howMany){
    if (!verify || !isEven){
    return alert ("Vamos Jogar!")}
    else{
      return  alert ("ai nao!")
    }
}