const readline = require('readline'); // Moduuli, jolla saadaan luettua käyttäjän syöte

const rl = readline.createInterface({ // Luodaan readline-objekti
  input: process.stdin, // Määritetään syöte
  output: process.stdout // Määritetään tulostus
});

//Laskin

function calculate() { // Funktio, joka kysyy käyttäjältä kaksi lukua ja laskee niille yhteen-, vähennys-, kerto- ja jakolaskun
  console.log('Voit sulkea sovelluksen kirjoittamalla "exit"');
  rl.question('Syötä ensimmäinen luku: ', (luku1) => { 
    // Tarkista, onko käyttäjä syöttänyt "exit"
    if (luku1.toLowerCase() === 'exit') { 
      rl.close(); // Sulje sovellus
      return; 
    }

    // Muutetaan syöte numeroksi (parseFloat:desimaaleilla, parseInt:kokonaisluvut)
    luku1 = parseFloat(luku1); 

    // Numero tarkistetaan funktiolla isNaN
    if (isNaN(luku1)) { 
      console.log('Virheellinen syöte. Syötä numero.');
      calculate(); 
      return; 
    }

    // Kysytään toinen luku käyttäjältä
    rl.question('Syötä toinen luku: ', (luku2) => {
      // Tarkista, onko käyttäjä syöttänyt "exit"
      if (luku2.toLowerCase() === 'exit') {
        rl.close(); // Sulje sovellus
        return;
      }

      // Muutetaan syöte numeroksi (parseFloat:desimaaleilla, parseInt:kokonaisluvut)
      luku2 = parseFloat(luku2);

      // Numero tarkistetaan funktiolla isNaN
      if (isNaN(luku2)) {
        console.log('Virheellinen syöte. Syötä numero.');
        calculate();
        return;
      }

      // Näytetään tulokset
      console.log('Summa: ' + (luku1 + luku2));
      console.log('Erotus: ' + (luku1 - luku2));
      console.log('Tulo: ' + (luku1 * luku2));
      console.log('Osamäärä: ' + (luku1 / luku2));

      // Kutsutaan calculate-funktiota uudestaan.
      calculate();
    });
  });
}

// Käynnistetään laskin
calculate();