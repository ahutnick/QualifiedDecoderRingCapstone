// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function getAlphabet() {
    return [
           "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
           "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
          ];
  }

  function shiftMessage(alphabet, cipher, shift) {
    let message = "";
    for (let position in cipher) {
      const letter = cipher[position];
      if (alphabet.includes(letter)) {
        const oldIndex = alphabet.indexOf(letter);
        let newIndex = oldIndex + shift;
        if (newIndex > 25) newIndex = newIndex - 26;
        else if (newIndex < 0) newIndex = newIndex + 26;
        message += alphabet[newIndex];
      } else message += letter;
    }
    return message;
  
  }
  
  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25) return false;
    const alphabet = getAlphabet();
    return shiftMessage(alphabet, input.toLowerCase(), shift);
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
