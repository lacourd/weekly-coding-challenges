function LongestWord(sen) { 

  // code goes here 
  let validCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let words = sen.split(' ');
  let longest = "";
  for (let i=0; i<words.length; i++) {
    let currentWord = words[i];
    let characterCount = 0;
    for (let j=0; j<currentWord.length; j++) {
      if (validCharacters.includes(currentWord[j])) {
        characterCount++
      } else {
        characterCount--
      }
      }
      if (characterCount > longest.length) {
        longest = currentWord;
    }
  }
  return longest; 

}
   
// keep this function call here 
console.log(LongestWord(readline()));