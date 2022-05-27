// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // Set up standard polybius board for reference
  function polybiusBoard() {
    return [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "i/j", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z"]
    ];
  }

  /* Reference polybius board to find column and row number of each
   * letter and add to message string. If i or j are called, search
   * for "i/j" specifically on the board. Add one to each number before 
   * including in the message to comply with indexing form.
  */
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

  /* Check for spaces before encrypting the input. If spaces are present,
   * encrypt one chunk at a time and add result to message variable including 
   * the space after that chunk. Then, return trimmed message. Else, 
   * simply call parseEncrypt on the whole input and return result.
  */
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

  /* Loop through each number pair in the input, using the first number
   * as the column number and the second number as the row number. Subtract 
   * 1 before computing due to indexing form. Then, use both variables 
   * to find the corresponding letter on the polybius board and add it 
   * to the message variable. Then, return message
  */
  function parseDecrypt(input) {
    const board = polybiusBoard();
    let message = "";
    for (let i = 0; i < input.length; i += 2) {
      const colPos = input[i] - 1;
      const rowPos = input[i + 1] - 1;
      const letter = board[rowPos][colPos];
      message += letter;
    }
    return message;
  }

  /* Check for spaces before decrypting the input. If spaces are present,
   * decrypt one chunk at a time and add result to message variable including 
   * the space after that chunk. Then, return trimmed message. Else, 
   * simply call parseDecrypt on the whole input and return result.
  */
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

  // Determine whether to encode / decode and set encode input to lowercase
  function polybius(input, encode = true) {
    return (encode) ? encrypt(input.toLowerCase()) : decrypt(input);
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
