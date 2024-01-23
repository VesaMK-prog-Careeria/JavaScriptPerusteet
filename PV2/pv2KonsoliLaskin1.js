let summa = 0;
//Määritellään process.stdin standardiksi input-objektiksi.
var standard_input = process.stdin;
//Asetetaan input-merkistö
standard_input.setEncoding('utf-8');
//Aloitetaan sovellus ja kirjoitetaan käyttäjälle ohjeita
console.log("JavaScript-laskin, konsolisovellus (V0.1)");
console.log('Sovellus suljetaan kirjoittamalla "exit"');
process.stdout.write("Anna ensimmäinen luku: ");
//Seuraavaa rutiinia kutsutaan aina, kun käyttäjä kirjoittaa jotain ja/tai painaa enteriä 
standard_input.on('data', function (data) {

    // Sovellus suljetaan, kun käyttäjää antaa avainsanan "exit"
    if (data === 'exit\r\n'){
        console.log("Käyttäjä sulki laskimen");
        process.exit();
    } else //Muussa tapauksessa lasketaan yhteen lukujen summia
    {
        summa = summa + parseInt(data);
        //Annetun luvun tulostus konsolille
        console.log('Annoit luvun: ' + data.trim() + ' summa on ' + summa);
        process.stdout.write("Anna uusi luku: ");

    }

});

