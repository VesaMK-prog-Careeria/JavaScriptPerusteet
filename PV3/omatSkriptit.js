    //muuttujamäärityksiä
    var myObj, myJSON, i, j, k=0, x = "";
    //määritellään myJSON-objekti joka on merkkijono eli stringi = alkaa heittomerkillä ' ja loppuu ';
    myJSON = '{"cars":[{"name":"Ford","model":"Mondeo","engine":"2.0TDCI","link":"www.ford.fi"},'+
    '{"name":"BMW","model":"X6","engine":"3.8 V8","link":"www.bmw.fi"},'+
    '{"name":"Audi","model":"A3","engine":"1.6 TD","link":"www.audi.fi"},'+
    '{"name":"Opel","model":"Insignia","engine":"1.7 Gasoline","link":"www.opel.fi"},'+
    '{"name":"Fiat","model":"Linea","engine":"1.4","link":"www.fiat.fi"}]}';
    //parseroidaan JSON-stringistä JavaScript-objekti, jota käytetään taulukon luontiin: 
    myObj = JSON.parse(myJSON);
    //JavaScript-funktio haeAutot alkaa...
    function haeAutot() { 
        //x-muuttujaan rakennetaan HTML-koodisto, jossa sekä taulukon ohjaustägejä, että myObj:ssa olevaa dataa
        x = "<table><tr><th>Merkki</th><th>Malli</th><th>Moottori</th><th>www-sivut</th></tr>"; //taulukon aloitus+otsikot
        for (i in myObj.cars) { //käsitellään kaikki JavaObjektissa myObj olevat rivit ja lisätään taulukkokoodit kunkin sarakkeen ympärille
            x += "<tr><td>" + myObj.cars[i].name + "</td>";
            x += "<td>" + myObj.cars[i].model + "</td>";
            x += "<td>" + myObj.cars[i].engine + "</td>";
            x += "<td><a href='http://" + myObj.cars[i].link + "' target=blank>" + myObj.cars[i].link + "</a></td></tr>";
        }
        x += "</table>"; //taulukon lopetus
        //sijoitetaan silmukassa luotu taulukko HTML-sivun kohtaan, jossa on merkintä id="autot"
        document.getElementById("autot").innerHTML = x;     
    }; //JavaScript-funktio haeAutot loppu...

    
//Funktio käsittelee kaikki ne HTML -elementit, joiden Tag:i on <a>, eli linkit 
    function linkkiVarit() {
        var linkit = document.getElementsByTagName('a');
        for ( var i=0; i < linkit.length; i++) {        //silmukka käsittelee kaikki sivun linkit
            linkit[i].style.backgroundColor = "red";    //tekstin taustaväri asetetaan punaiseksi
        }
    };

//Funktio käy läpi kaikki ne HTML -elementit, joiden koodissa on määritys class="muotoilu" 
//esimerkiksi kuten tässä buttonissa: <button type="button" class="muotoilu" onclick="linkkiVarit()">Linkit</button>
    function classNimiFontti() {
        var classit = document.getElementsByClassName('muotoilu'); 
        for ( var i=0; i < classit.length; i++) {       //silmukka käsittelee kaikki kohteena olevat elementit
            classit[i].style.color = "Tomato";          //fontin väri tomaatiksi
        }
    };

//Funktio käy jokaisella kutsukerralla hakemassa seuraavan auton myObj:sta 
//Funktiota siis kutsutaan napista, eikä TÄMÄ funktio käsittele koko myObj:ia yhdellä kertaa
    function luoAutot() {
        if (k > myObj.cars.length-1) { //tutkitaan onko kaikki jo tulostettu, jos on, annetaan ilmoitus (k on globaali muuttuja)
            alert("kaikki käsitelty");
        } else { //kaikkia ei olla vielä käsitelty, joten haetaan seuraava
            let kohdeElementti = document.createElement("li"); //luodaan listaobjekti
            let auto = document.createTextNode(myObj.cars[k].name); //sijoitetaan auton nimi auto-muuttujaan
            kohdeElementti.appendChild(auto); //lisätään auton nimi seuraavaksi listalle
            document.getElementById("autoja").appendChild(kohdeElementti); //viedään auto HTML-sivulle kohtaan "autoja"
            k++; //kasvatetaan myObj-taulukon indeksiä jokaisella napin painalluksella (globaali k-muuttuja)
        }
    }
    


