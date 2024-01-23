let numerot = "";
console.log("Numerot-tyyppi on " + typeof(numerot));
let i = 0, j = 10;
let puhelimet = ["Samsung", "Apple", "Blackberry", "Oneplus", "Nokia", "HTC", "Huawei"];
console.log("Mennään do-while -silmukkaan");
do {
    numerot = "Numero on nyt: " + i;
    console.log(numerot);
    i++;
} while (i<10);
console.log("Mennään WHILE -silmukkaan");
while (j>0) {
    numerot = "Numero on nyt: " + j;
    console.log(numerot);
    j--;
}
console.log("Puhelinlista alkaa tässä:");
for (i=0; i<puhelimet.length; i++) {
    if (puhelimet[i] == "Apple") {
        var huomautus = " <-- mulla on tämä!";
    } else { var huomautus = ""};
    console.log(puhelimet[i]+huomautus);
}


