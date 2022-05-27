// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function standardAlphabet() {
    return "abcdefghijklmnopqrstuvwxyz";
  }

  function duplicateCheck(alphabet) {
    const letters = alphabet.split("");
    letters.sort((a, b) => a < b ? -1 : 1);
    const dups = letters.filter((letter, index) => letter === letters[index + 1]);
    return dups.length > 0;
  }

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
