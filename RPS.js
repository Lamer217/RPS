// Prompt user for input
const userInput = () => {
  // Also changing case if necessary
  const userPrompt = prompt('Choose your weapon!', '').toLowerCase();
  // Make sure input is a valid string
  if (userPrompt === 'rock' || userPrompt === 'paper' || userPrompt === 'scissors') {
    return userPrompt;
  } else {
    // if invalid string return error
    alert('Invalid input, please only enter: Rock, Paper or Scissors. (Case insensitive)');
  }
};
// After string entry generate computer's choice
const computerOutput = () => {
  // Random number 1-3 for computer's choice
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
const compare = (userInput, computerOutput) => {
  // Some shortcuts for variants
  const draw =
    (userInput === 'rock' && computerOutput === 'rock') ||
    (userInput === 'paper' && computerOutput === 'paper') ||
    (userInput === 'scissors' && computerOutput === 'scissors');
  if (draw) {
    alert("It's a draw!");
  } else if (userInput === 'rock' && computerOutput === 'paper') {
    alert('You lose! The paper covers your rock.');
  } else if (userInput === 'rock' && computerOutput === 'scissors') {
    alert('You win! Your rock beats the scissors.');
  } else if (userInput === 'paper' && computerOutput === 'rock') {
    alert('You win! Your paper covers the rock.');
  } else if (userInput === 'paper' && computerOutput === 'scissors') {
    alert('You lose! The scissors cut your paper.');
  } else if (userInput === 'scissors' && computerOutput === 'rock') {
    alert('You lose! The rock beats your scissors.');
  } else if (userInput === 'scissors' && computerOutput === 'paper') {
    alert('You win! Your scissors cut the paper.');
  }
};
// The game function
const playRound = (userInput, computerOutput, compare) => {
  compare(userInput(), computerOutput());
};
// Output result
playRound(userInput, computerOutput, compare);
