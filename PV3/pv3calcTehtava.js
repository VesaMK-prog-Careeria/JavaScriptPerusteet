
function clearResult() { /* Tämä funktio tyhjentää laskimen näytön */
    document.getElementById('calc').innerHTML = '';
    document.getElementById('result').innerHTML = '';
}

function backspace() { /* Tämä funktio poistaa laskimen näytöltä viimeisen numeron tai operaattorin */
    var expression = document.getElementById('calc').innerHTML;
    document.getElementById('calc').innerHTML = expression.substring(0, expression.length - 1);
}

function appendNumber(number) { /* Tämä funktio lisää laskimen näytölle numeron */
    document.getElementById('calc').innerHTML += number;
}

function appendOperator(operator) { /* Tämä funktio poistaa laskimen näytöltä operaattorin */
    var expression = document.getElementById('calc').innerHTML;
    var lastChar = expression.charAt(expression.length - 1);
    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
        document.getElementById('calc').innerHTML = expression.substring(0, expression.length - 1);
    }
    document.getElementById('calc').innerHTML += operator;
}

function calculate() {
    appendOperator(''); /* Kutsutaan yllä olevaa funktiota */
    var expression = document.getElementById('calc').innerHTML; /* Tämä lukee laskimen näytöllä olevan laskun */
    var result = eval(expression); /* Tämä laskee laskimen näytöllä olevan laskun */
    document.getElementById('result').innerHTML = result;
}

function showDate() { /* Tämä funktio näyttää päivämäärän */
    let date = new Date();
    document.getElementById('date').innerHTML = "Tänään on: " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
}
