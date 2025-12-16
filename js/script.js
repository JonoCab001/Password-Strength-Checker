let password = document.getElementById("password");
let power = document.getElementById("power-point");

// Function for checking password strength
password.oninput = function() {
    let point = 0;
    let val = password.val;

    // Array for Password Meter percentage
    let widthPower = ["1%", "25%", "50%", "75%", "100%"];

    // Array for Password Meter colour
    let colourPower = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];

    // Check for password characters
    if (val.length >= 6) {
        let arrayTest = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];

        arrayTest.forEach((item) => {
            if (item.test(val)) {
                point += 1;
            }
        });
    }

    power.style.width = widthPower[point];
    power.style.backgroundColor = colourPower[point];
};