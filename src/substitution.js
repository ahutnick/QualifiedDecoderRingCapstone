// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // Set up standard alphabet for reference against new alphabet string
  function standardAlphabet() {
    return "abcdefghijklmnopqrstuvwxyz";
  }

  /* Split the alphabet into an array to sort alphabetically and filter
   * for duplicates. If any are found (the dups array has a length greater
   * than 0), return true.
  */
  function duplicateCheck(alphabet) {
    const letters = alphabet.split("");
    letters.sort((a, b) => a < b ? -1 : 1);
    const dups = letters.filter((letter, index) => letter === letters[index + 1]);
    return dups.length > 0;
  }

  /* Replace the values of one alphabet for values with the same position
   * in another. Loop through the input string. If the character is in the
   * base (starting) alphabet, then store the index of that character. Then,
   * add the character at the same index in the new alphabet into a message
   * string. Else, add the original character. Return the message. 
  */
  function crypt(input, base, outcome) {
    let message = ""
    for (let position in input) {
      const letter = input[position];
      if (base.includes(letter)) {
        const index = base.indexOf(letter);
        message += outcome[index];
      } else {
        message += letter;
      }
    }
    return message;
  }
  /* Return false if edge cases are met, otherwise, determine whether
   * to encrypt or decrypt the input string. This will determine whether 
   * to start with the standard alphabet (encrypt) or new alphabet (decrypt).
   * If encrypting, set the input value to lower case first. 
  */
  function substitution(input, alphabet, encode = true) {
    if (!alphabet) return false;
    if (alphabet.length != 26 || duplicateCheck(alphabet) || !alphabet) return false;
    const standard = standardAlphabet();
    return (encode) ? crypt(input.toLowerCase(), standard, alphabet) : crypt(input.toLowerCase(), alphabet, standard);
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
