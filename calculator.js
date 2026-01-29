// calculator.js - Enkla räkneoperationer

function add(a, b) {
   return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
   if(b === 0) {
         throw new Error('Division med noll är inte tillåten');
   }
   return a / b;
}

// Exportera funktionerna för användning i andra filer

    module.exports = { add, subtract, multiply, divide };
