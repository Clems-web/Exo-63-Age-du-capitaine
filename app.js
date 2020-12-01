for (age = 1; age < 100; age++) {
    if (age < 18) {
        document.getElementById("monParagraphe").innerHTML+="le Capitaine a " + age + "ans, il est jeune" + "<br><br>";
    }
    else if (age <= 50) {
        document.getElementById("monParagraphe").innerHTML+="le Capitaine a " + age + "ans, il n'est pas très vieux" + "<br><br>";
    }
    else if (age <= 80) {
        document.getElementById("monParagraphe").innerHTML += "le Capitaine a " + age + "ans, il est vieux" + "<br><br>";
    }
    else {
        document.getElementById("monParagraphe").innerHTML += "le Capitaine a " + age + "ans, il est sûrement mort" + "<br><br>";
    }
}