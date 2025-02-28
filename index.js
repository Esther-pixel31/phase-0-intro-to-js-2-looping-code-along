// Code your solutions in this file
// 1. writeCards: Uses a do...while loop to create thank-you messages
function writeCards(names, event) {
    let messages = [];
    let i = 0;
    do {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      i++;
    } while (i < names.length);
    return messages;
  }
  
  // 2. countDown: Uses a do...while loop to count down from the given number to zero
  function countDown(number) {
    do {
      console.log(number);
      number--;
    } while (number >= 0);
  }
  
  // Example Usage:
  console.log(writeCards(["Alice", "Bob", "Charlie"], "birthday"));
  countDown(5);
  