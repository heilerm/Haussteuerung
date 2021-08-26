function telephoneCheck(str) {
    /* check if there is a non-numeric value in it*/
    allowedValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "(", ")"]
    /* var einArray = ['Peter', 'Paul', 'Mary'];
       console.log(einArray.indexOf('Paul')); */

    /*     Brutaler Weg: 
        for (let i = 0; i <= str.length - 1; i++) {
            console.log("str[i]:", i, str[i]);
            if (allowedValues.indexOf(str[i]) > -1)
                console.log(allowedValues.indexOf(str[i]));
            else {
                console.log("not allowed:", console.log(allowedValues.indexOf(str[i])));
    
            }; */


    /* eleganter */
    /* check if there is a non-numeric value in it*/

    var validNumber = true
    for (char in str) {
        if (char in allowedValues) {
            console.log(`Char is present`, str[char]);

        }
        else {
            console.log(`Char is not present`, str[char]);
            validNumber = false;
        };

    };
    if (validNumber == false) {
        console.log("invalid number given")
    }
    else {
        console.log("valid number given")

    };
    console.log("Test 2 - 7 erfolgreich passiert");
    /* check if there is a 1 at position one*/
    if (str[0] == "1") {
        console.log("position 1 = 1")
    }
    else {
        console.log("position 1 NE 1 it is:", str[0])
        return false;
    };
    /* check if there is a "1 " or "1 (" or "1( " at position one - three*/
    /* hole ersten 3 Zeichen */
    let pos1_3 = str.slice(0, 3);
    let pos1_2 = str.slice(0, 2);
    if (pos1_2 == "1 " || pos1_2 == "1(" || pos1_3 == "1 (" || pos1_3 == "1( ") {
        console.log("pos1_2 und pos1_3 passiert", pos1_3)
    }
    else {
        console.log("pos1_2 und pos1_3 nicht passiert", pos1_3);
    };
    /* Idee: prüfe, ob erstes Zeichen = "(" dann false. = Prüfung 15., Schon mit Prüfung auf erstes Zeichen NE 1 
    prüfe ob ersten 2 Zeichen "-<zahl>" dann false = Prüfung 18
    prüfe erstes Zeichen: Wenn "1" dann okay, 
       dann nimm die 1 raus und ebenso alle " ", "(", ")", "-" raus damit nur noch Ziffern bleiben
       jetzt prüfe, ob Länge = 10 
    */
    let pos1 = str.slice(0, 1);
    if (pos1 == "(") {
        console.log(`erstes Zeichen = \"(\"`);
        return false;
    }
};
telephoneCheck('-155-(555-58855');
/*
1. telephoneCheck("555-555-5555") should return a boolean.
telephoneCheck("1 555-555-5555") should return true.
telephoneCheck("1 (555) 555-5555") should return true.
telephoneCheck("5555555555") should return true.
5. telephoneCheck("555-555-5555") should return true.
telephoneCheck("(555)555-5555") should return true.
telephoneCheck("1(555)555-5555") should return true.
telephoneCheck("555-5555") should return false.
telephoneCheck("5555555") should return false.
10. telephoneCheck("1 555)555-5555") should return false.
telephoneCheck("1 555 555 5555") should return true.
telephoneCheck("1 456 789 4444") should return true.
telephoneCheck("123**&!!asdf#") should return false.
telephoneCheck("55555555") should return false.
15. telephoneCheck("(6054756961)") should return false
telephoneCheck("2 (757) 622-7382") should return false.
telephoneCheck("0 (757) 622-7382") should return false.
telephoneCheck("-1 (757) 622-7382") should return false
telephoneCheck("2 757 622-7382") should return false.
20. telephoneCheck("10 (757) 622-7382") should return false.
telephoneCheck("27576227382") should return false.
telephoneCheck("(275)76227382") should return false.
telephoneCheck("2(757)6227382") should return false.
telephoneCheck("2(757)622-7382") should return false.
25. telephoneCheck("555)-555-5555") should return false.
26. telephoneCheck("(555-555-5555") should return false.
27. telephoneCheck("(555)5(55?)-5555") should return false.
*/



