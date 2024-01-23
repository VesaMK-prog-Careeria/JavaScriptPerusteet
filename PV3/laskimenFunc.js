let laskukaava = "";
function luoLaskukaavaa(clicked_id) {
    if (clicked_id=="=") {
        poistaViimeinenOper();
        document.getElementById("kaava").innerText=laskukaava;
        document.getElementById("tulos").innerText=eval(laskukaava);
    } else if (clicked_id=="C") {
        laskukaava = "";
        document.getElementById("kaava").innerText=laskukaava;
        document.getElementById("tulos").innerText="";  
    } else if (clicked_id=="BS") {
        laskukaava = laskukaava.substr(0,laskukaava.length-1);
        document.getElementById("kaava").innerText=laskukaava;
    } else {
        laskukaava = laskukaava + clicked_id;
        document.getElementById("kaava").innerText=laskukaava;
    }
}

function poistaViimeinenOper() {
    let operaattorit = "+-*/";
    let viimeinenMrk = laskukaava.substr(laskukaava.length-1,laskukaava.length);
    //alert(laskukaava + " " + viimeinenMrk + " " + operaattorit);
    if (operaattorit.indexOf(viimeinenMrk)>0) {
        laskukaava = laskukaava.substr(0,laskukaava.length-1);
        //alert(laskukaava);
    }
}