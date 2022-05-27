// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybiusBoard() {
    return  [
              ["a", "b", "c", "d", "e"], 
              ["f", "g", "h", "i/j", "k"],
              ["l", "m", "n", "o", "p"],
              ["q", "r", "s", "t", "u"],
              ["v", "w", "x", "y", "z"]
            ];
  }

  function parseEncrypt(input) {
    const board = polybiusBoard();
    let message = "";
    for (let position in input) {
      let letter = input[position];
      if (letter === "i" || letter === "j") letter = "i/j";
      const row = board.find(row => row.includes(letter));
      const colPos = row.indexOf(letter) + 1;
      const rowPos = board.indexOf(row) + 1;
      message += `${colPos}${rowPos}`;
    }
    return message;
  };

  function encrypt(input) {
    if (input.includes(" ")) {
      let message = "";
      const phrases = input.split(" ");
      for (let phrase in phrases) {
        const pair = parseEncrypt(phrases[phrase]);
        message += `${pair} `;
      }
      return message.trim();
    } else {
      return parseEncrypt(input);
    }
  }

  function parseDecrypt(input) {
    const board = polybiusBoard();
    let message = "";
    for(let i = 0; i < input.length; i += 2) {
      const colPos = input[i] - 1;
      const rowPos = input[i + 1] - 1;
      const letter = board[rowPos][colPos];
      message += letter;
    }
    return message;
  }
  
  function decrypt(input) {
    let message = "";
    if (input.includes(" ")) {
      const phrases = input.split(" ");
      for (let phrase in phrases) {
        if (phrases[phrase].length % 2 != 0) return false;
        message += `${parseDecrypt(phrases[phrase])} `;
      }
      return message.trim();
    } else {
      if (input.length % 2 != 0) return false;
      return parseDecrypt(input);
    }
  }

  function polybius(input, encode = true) {
    return (encode) ? encrypt(input.toLowerCase()) : decrypt(input);
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
