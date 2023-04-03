const fizz = document.getElementById("answer");

fizz.addEventListener("click", function () {
    
    const number = document.getElementById("numbers").value;
    const results = document.getElementById("results");
    results.innerHTML = "";
    let output = "";

    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output = "FizzBuzz";
        } else if (i % 3 === 0) {
            output = "Fizz";
        } else if (i % 5 === 0) {
            output = "Buzz";
        } else {
            output = i;
        }
    }

    results.innerHTML = output;
});