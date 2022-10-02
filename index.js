const birthDate = document.querySelector("#birth-date")
const luckyNumber = document.querySelector("#lucky-number")
const subBtn = document.querySelector("#sub-btn")
const outputBox = document.querySelector("#output")
subBtn.addEventListener("click", checkLuck)


function checkLuck() {

    var date = birthDate.value

    var sum = calculateSum(date)
    if (date === "") {

        outputBox.innerText = "Please enter your date of birth."

    } else if (luckyNumber.value === "") {
        outputBox.innerText = "Please enter your lucky number."
    } else if (sum % Number(luckyNumber.value) === 0) {

        outputBox.innerText = " Yay! Your Birthday is Lucky ! "

    } else {

        outputBox.innerText = "Ops! Hard Luck!"

    }
}

function calculateSum(date) {



    date = date.replaceAll("-", "0")

    sum = 0

    for (i = 0; i < date.length; i++) {

        sum = sum + Number(date.charAt(i))

        //a=date[i] Checking date string array                                    

    }

    return sum
}