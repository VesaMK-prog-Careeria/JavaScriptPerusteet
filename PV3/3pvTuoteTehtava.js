    //muuttujamäärityksiä
    var myObj, myJSON, i, j, k=0, x = "";
    //määritellään myJSON-objekti joka on merkkijono eli stringi = alkaa heittomerkillä ' ja loppuu ';
    myJSON = '{"tuotteet":[{"id":"12345","tuote":"Sukka","ostohinta":"5.90","myyntihinta":"9.90","link":"www.tilauksetdb.azurewebsites.net/"},'+
    '{"id":"12345","tuote":"Sukka","ostohinta":"5.90","myyntihinta":"9.90","link":"www.google.com"},'+
    '{"id":"12345","tuote":"Sukka","ostohinta":"5.90","myyntihinta":"9.90","link":"www.google.com"},'+
    '{"id":"12345","tuote":"Sukka","ostohinta":"5.90","myyntihinta":"9.90","link":"www.google.com"},'+
    '{"id":"12345","tuote":"Sukka","ostohinta":"5.90","myyntihinta":"9.90","link":"www.google.com"}]}';
    //parseroidaan JSON-stringistä JavaScript-objekti, jota käytetään taulukon luontiin: 
    myObj = JSON.parse(myJSON);

    //JavaScript-funktio haeTuotteet alkaa...
    function haeTuotteet() { 
        //x-muuttujaan rakennetaan HTML-koodisto, jossa sekä taulukon ohjaustägejä, että myObj:ssa olevaa dataa
        x = "<table><tr><th>ID</th><th>Tuote</th><th>Ostohinta</th><th>Myyntihinta</th><th>kate%</th></tr>"; //taulukon aloitus+otsikot
        for (i in myObj.tuotteet) { //käsitellään kaikki JavaObjektissa myObj olevat rivit ja lisätään taulukkokoodit kunkin sarakkeen ympärille
            x += "<tr><td>" + myObj.tuotteet[i].id + "</td>";
            x += "<td>" + myObj.tuotteet[i].tuote + "</td>";
            x += "<td>" + myObj.tuotteet[i].ostohinta + "</td>";
            x += "<td>" + myObj.tuotteet[i].myyntihinta + "</td>";
            x += "<td>" + ((myObj.tuotteet[i].myyntihinta - myObj.tuotteet[i].ostohinta) / myObj.tuotteet[i].myyntihinta * 100).toFixed(2) + "</td></tr>";
        }
        x += "</table>"; //taulukon lopetus
        //sijoitetaan silmukassa luotu taulukko HTML-sivun kohtaan, jossa on merkintä id="tuotteet"
        document.getElementById("tuotteet").innerHTML = x;     
    }; //JavaScript-funktio haeTuotteet loppu...

    function tarkistaTuoteLinkki(tuoteLinkki) {
        let result="0";
        var linkit = document.getElementsByClassName("linkit");
        for (var i=0; i<linkit.length; i++) {
            if (tuoteLinkki == linkit[i].innerText) {
                result = "1";
            }
        }
        return result;
    }

    //JavaScript-funktio luoLinkit alkaa...
    function luoLinkit() {
            for (k in myObj.tuotteet) {
                var oliEnnestään = tarkistaTuoteLinkki(myObj.tuotteet[k].link);
                if (oliEnnestään == "0") {
                    let otsikkoElementti = document.createElement("h3");
                    let ahrefLinkki = document.createElement("a");
                    ahrefLinkki.className="linkit";
                    ahrefLinkki.href = myObj.tuotteet[k].link;
                    ahrefLinkki.target = "_blank";
                    let linkkidata = document.createTextNode(myObj.tuotteet[k].link);
                    ahrefLinkki.appendChild(linkkidata);
                    otsikkoElementti.appendChild(ahrefLinkki);
                    document.getElementById("linkit").appendChild(otsikkoElementti);

                }
            }
        }
    
