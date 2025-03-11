// Code your solutions in this file

function writeCards(names, event) {
    const cards = [];
    for (let i = 0; i < names.length; i++) {
      cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
  }
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Optional export for testing
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      writeCards,
      countDown,
    };
  }