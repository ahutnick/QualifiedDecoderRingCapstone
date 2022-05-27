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
  
  function substitution(input, alphabet, encode = true) {
    if (alphabet.length != 26 || duplicateCheck(alphabet)) return false;

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
