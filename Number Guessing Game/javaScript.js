const min = 1;
const max = 100;
const result = Math.floor(Math.random() *max) +  min;

let attempts = 0;
let running = true;

while (running) {
  let guess = window.prompt(`Enter a number between ${min} and ${max}`);
  let guess1 = Number(guess);

  if (isNaN(guess1)) {
      window.prompt(`Please enter a number`);
  } else if (guess1 < min || guess1 > max) {
       window.prompt(`Enter a number between ${min} and ${max}`);
  } else {
    attempts++;
    if (guess1 < result) {
          window.alert(`Too low, try again`);
    } else if (guess1 > result) {
           window.alert(`Too high, try again`);
    } else {
      window.alert(`Yes! the answer is ${result}. You guessed it in ${attempts} attempts`);
      running = false;
      attempts = 0;
    }
    
  }
}
