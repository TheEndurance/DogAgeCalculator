window.onload = function () {
    const output = document.getElementById("output");
    const dogeImage = document.getElementById("img-output");
    const dogForm = document.getElementById("dogForm");
    const h1Output = document.getElementById("h1-output")
    const ageConversion = function (dogYears, c = 0.6, d = 2) {
        return ((d + c) * dogYears) / (c + dogYears);
    }

    const getRandomDoge = function () {
        return Math.floor(Math.random() * 3) + 1;
    }

    const printOutput = function (age, customOutput) {
        output.style.visibility = "visible";
        const randomDoge = getRandomDoge();
        const imgSrc = `./doges/doge${randomDoge}.png`;
        dogeImage.setAttribute("src", imgSrc);
        if (!customOutput) {
            let year,month;
            if (age > 1){
                year = Math.floor(age);
                month = ((age - year) * 12).toFixed(1);
                h1Output.innerText = `Your doge has the age of a ${year} year and ${month} month old human.`;
            } else {
                month = (age * 12).toFixed(1);
                h1Output.innerText = `Your doge has the age of a ${month} month old human.`;
            }
        } else {
            h1Output.innerText = customOutput;
        }
    }

    dogForm.addEventListener('submit', function (evt) {
        evt.preventDefault();
        let dogAge = evt.target.dogAge.value;
        dogAge = parseFloat(dogAge);
        if (isNaN(dogAge)) {
            printOutput(null, "Doge says no! Try again.");
        } else {
            if (dogAge >= 0) {
                printOutput(ageConversion(dogAge));
            } else {
                printOutput(null, "Wow such age, much incompatible, amaze!");
            }
        }
    });
}();

