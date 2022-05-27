// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // Setup standard alphabet array for shift purposes
  function getAlphabet() {
    return [
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
      "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];
  }

  /* Perform the actual shifting from standard alphabet
   * character by character, adding character / space if not in standard
   * alphabet. Adds each character and returns in one message string.
  */
  function shiftMessage(alphabet, cipher, shift) {
    let message = "";
    for (let position in cipher) {
      const letter = cipher[position];
      if (alphabet.includes(letter)) {
        const oldIndex = alphabet.indexOf(letter);
        let newIndex = oldIndex + shift;
        if (newIndex > 25) newIndex -= 26;
        else if (newIndex < 0) newIndex += 26;
        message += alphabet[newIndex];
      } else message += letter;
    }
    return message;
  }

  /* Checks for edge cases and sets shift to decode if necessary before
   * shifting the values.
  */
  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25) return false;
    const alphabet = getAlphabet();
    if (!encode) shift *= -1;
    return shiftMessage(alphabet, input.toLowerCase(), shift);
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
