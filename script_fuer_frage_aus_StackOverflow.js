const timer = document.querySelector('#time span')

setInterval(() => {
    timer.innerText = new Date().toLocaleString()
}, 1000)

const a = {
    i: 1,
    valueOf: function () {
        //toString: function () { //
        return a.i++; // das ist ein post-increment. a.i wird zurückgegeben und dann um eins erhöht
    }
}

if (a == 1 && a == 2 && a == 3 && a == 4) { // hier wird ein Objekt "a" mit einer Zahl verglichen. 
    // in https://262.ecma-international.org/5.1/#sec-8.12.8 findet man, dass beim Vergleich
    // eines Objekt mit === das Objekt konvertiert wird und dabei die interne ObjektMethode toSting() oder valueOf() 
    // aufgerufen wird. 
    // genauer sind des die internen Methoden GET mit dem Argument toString bzw valueOf. Das erklärt auch, dass 
    // es nicht der Methodenaufruf valueOf() ist, sondern die Property/key valueOf im Objekt a. 
    // Diese internen Methoden kann mann überschreiben (custom code), dann werden die aufgerufen.
    // D.h. oben versucht er das Objekt a mit der toString() Methode zu konvertieren. Diese gibt vom Objekt den Wert 
    // der Objektproperty a.i zurück und erhöht danach i (Post-inkrement)".
    // bei der ersten a === 1 Abfrage konvertiert er das Objekt a in einen defaultWert, ruft dabei die custom toString bzw.
    // toValue() auf, die gibt für a cden konvertierten Wert 1 zurkc, danach ist a = 2.
    // Also erste if-Bedingung erfüllt. Dann kommt die zweite if abfrage, auch hier wird das Objekt a konvertiert, a ist dann 
    // tatsächlich 2 und wird durch den Post-Increment auf 3 gesetzt. Damit ist für die dritte if-Abfrage
    // a = 3. Ich könnte also mit a == 4 && a == 5 etc. weitermachen
    // es wird mit "==" verglichen, die konvertieren den Typ bevor der Vergleich auf Gleichheit stattfindet. 
    // Wechselt man eines der "==" durch "===" aus, dann findet keine Typkonvertierung statt und dann geht der Vergleich von
    // a mit einer Zahl natürlich schief
    console.log('Hello World!');
}