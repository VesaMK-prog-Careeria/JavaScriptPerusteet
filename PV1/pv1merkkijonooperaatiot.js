console.log("-----------------------------");
let merkkijono = "Tämä on JavaScript-harjoittelua, eikös - vain? - ";
let positio = merkkijono.indexOf("-");
let positio2 = merkkijono.lastIndexOf("-");
console.log(merkkijono);
console.log("tavuviiva on positiossa " + positio + " sekä viimeinen ilmentymä on paikassa: " + positio2);

console.log(merkkijono.slice(0,positio));
