// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

document.addEventListener('DOMContentLoaded', () => {
    // VARIABLES GLOBALES
    let currentValue = 0
    let currentOperator = null


    // GESTION DES CHIFFRES
    let numbers = document.querySelectorAll("button.number")
    //console.log(numbers)

    numbers.forEach((e) => e.addEventListener("click", () => {
        //console.log(e.innerHTML)
        updateDisplay(e.innerHTML)
    }))

    function updateDisplay(number) {
        let currentDisplay = document.getElementsByClassName("calculator__display")[0]
        //console.log(currentDisplay.innerHTML)

        if (currentDisplay.innerHTML == "0") {
            currentDisplay.innerHTML = number
        }
        else {
            currentDisplay.innerHTML += number
        }
    }

    //GESTION DES OPÉRATEURS
    let operators = document.querySelectorAll("button.key--operator")
    //console.log(operators)

    operators.forEach((e) => e.addEventListener("click", () => {
        //console.log(e.innerHTML)
        handleOperator(e.getAttribute("data-action"))
    }))

    function handleOperator(operator) {
        let currentDisplay = document.getElementsByClassName("calculator__display")[0]

        if (currentOperator == null) {
            currentValue = Number(currentDisplay.innerHTML)
            clearDisplay()
        }
        else {
            result()
        }

        currentOperator = operator
    }

    //GESTION DU ÉGAL
    document.querySelectorAll("button.key--equal")[0].addEventListener("click", result)

    function result() {
        let currentDisplay = document.getElementsByClassName("calculator__display")[0]
        let newValue = Number(currentDisplay.innerHTML)
        //console.log(newValue)

        if (currentOperator == "add") {
            currentValue += newValue
            //console.log(currentValue)
        }

        if (currentOperator == "subtract") {
            currentValue -= newValue
        }

        if (currentOperator == "multiply") {
            currentValue = currentValue * newValue
        }

        if (currentOperator == "divide") {
            currentValue = (currentValue / newValue).toFixed(5) //pour ne pas avoir trop de décimales
        }

        currentDisplay.innerHTML = currentValue
        currentOperator = null
    }

    // GESTION AC
    document.querySelectorAll('[data-action="clear"]')[0].addEventListener("click", clearCalculator)

    function clearDisplay() {
        document.getElementsByClassName("calculator__display")[0].innerHTML = "0"
    }

    function clearCalculator() {
        clearDisplay()
        currentValue = 0
        currentOperator = null
    }

    // GESTION FLOAT
    document.querySelectorAll('[data-action="decimal"]')[0].addEventListener("click", () => {
        let currentDisplay = document.getElementsByClassName("calculator__display")[0]

        //pour ne pas avoir plusieurs virgules
        if (!currentDisplay.innerHTML.includes(".")) {
            currentDisplay.innerHTML += "."
        }
    })
})