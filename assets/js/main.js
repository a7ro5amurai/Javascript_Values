function outputDouble() {
    let inputnumber = document.querySelector
    ("#number").valueAsNumber;
    let outputresult = document.querySelector(".result");
    inputnumber = inputnumber * 2;
    outputresult.innerHTML = `<p>${inputnumber}</p>`;
}

function ageCalc() {
    let inputbirthyear = document.querySelector("#YearOfBirth").valueAsNumber;
    let outputAge = document.querySelector(".outputAgeDiv")
    outputAge.innerText = 2024 - inputbirthyear;
}

function agecalcdif() {
    let AgeOne = document.querySelector("#inputAge1").valueAsNumber
    let AgeTwo = document.querySelector("#inputAge2").valueAsNumber
    let outputDif = document.querySelector(".outputAgeDif")
    if (AgeOne < AgeTwo){
        let difResult1 = AgeTwo - AgeOne;
        outputDif.innerText = `Die Differenz ist:  ${difResult1}`;
    } else if (AgeOne > AgeTwo) {
        let difResult2 = AgeOne - AgeTwo;
        outputDif.innerText = `Die Differenz ist:  ${difResult2}`;
    }
}