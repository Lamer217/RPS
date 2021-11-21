// Prompt user for input
const userInput = prompt('Choose your weapon!', '');
// Check input case
const userInputFormatted = userInput.toLowerCase();
// Make sure input is a valid string
const checkUserInput = userInputFormatted => {
  if (
    userInputFormatted === 'rock' ||
    userInputFormatted === 'paper' ||
    userInputFormatted === 'scissors'
  ) {
    return true;
  } else {
    // if invalid string return error
    alert('Invalid input, please only enter: Rock, Paper or Scissors. (Case insensitive)');
  }
};
// After string entry generate computer's choice
const computerOutput = () => {
  // Random number 1-3 for computers choice
  const num = Math.floor(Math.random() * 3) + 1;
  if (num === 1) {
    return 'rock';
  } else if (num === 2) {
    return 'paper';
  } else if (num === 3) {
    return 'scissors';
  } else {
    alert('Dev is Dumdum');
  }
};
// Compare computer vs user
const compare = (userInputFormatted, computerOutput, draw) => {
  if (draw) {
    alert("It's a draw!");
  } else if (userInputFormatted === 'rock' && computerOutput === 'paper') {
    alert('You lose! The paper covers your rock.');
  } else if (userInputFormatted === 'rock' && computerOutput === 'scissors') {
    alert('You win! Your rock beats the scissors.');
  } else if (userInputFormatted === 'paper' && computerOutput === 'rock') {
    alert('You win! Your paper covers the rock.');
  } else if (userInputFormatted === 'paper' && computerOutput === 'scissors') {
    alert('You lose! The scissors cut your paper.');
  } else if (userInputFormatted === 'scissors' && computerOutput === 'rock') {
    alert('You lose! The rock beats your scissors.');
  } else if (userInputFormatted === 'scissors' && computerOutput === 'paper') {
    alert('You win! Your scissors cut the paper.');
  }
};

// Some shortcuts for variants
const draw =
  (userInputFormatted === 'rock' && computerOutput === 'rock') ||
  (userInputFormatted === 'paper' && computerOutput === 'paper') ||
  (userInputFormatted === 'scissors' && computerOutput === 'scissors');
// The game function
const game = (userInputFormatted, computerOutput, checkUserInput) => {
  if (checkUserInput(userInputFormatted)) {
    return compare(userInputFormatted, computerOutput());
  }
};
// Output result
game(userInputFormatted, computerOutput, checkUserInput);
// Sadly I don't understand why i receive undefined here
