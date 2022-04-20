// Task no. 1

// Given a sentence with multiple lowercase words separated by spaces,
// write a Javascript code that finds the longest word in the sentence.
// If there are multiple words of the same length, choose one that has the highest number of vowels.
// Ignore any character in the sentence that is not a letter or a space.
// Find the most efficient way to achieve this.

// Sample input: “Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)
// Sample output: “experience”

// Note: Longest words are “everything” and “experience”, but the second has the most vowels

function longestWord(sentence) {
    var words = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" "); // Remove punctuation and spaces
    var longestWordsArray = []; // array to store all longest words

    // Choose the longest words and push to array
    longestWordsArray = longestWordsToArray(words);

    // Choose the most vowels from array
    if (longestWordsArray.length == 1){
        return longestWordsArray[0];
    } else {
        return mostVowels(longestWordsArray);
    }
}

// Choose the longest words and push to array
function longestWordsToArray(words) {
    var longestCharCount = 0;
    var longestWordsArray = [];
    for (var i = 0; i < words.length; i++) {
        var currentWord = words[i]; // Get the current word from the words array
        var charCount = currentWord.length; // Get the number of characters in the current word
        
        if (charCount > longestCharCount) {
            longestWordsArray = []; // Empty array if have new longestCharCount
            longestWordsArray.push(currentWord);
            longestCharCount = charCount;
        } else if (charCount === longestCharCount) {
            longestWordsArray.push(currentWord); // Add the current word to the array if have same charCount as longestCharCount
        }
    }
    return longestWordsArray;
}

// Choose the most vowels from array
function mostVowels(longestWordsArray) {
    var highestVowelCount = 0;
    var output = "";
    for (var i = 0; i < longestWordsArray.length; i++) {
        var word = longestWordsArray[i];
        var vowelCount = countVowels(word);
        if (vowelCount > highestVowelCount) {
            highestVowelCount = vowelCount;
            output = word;
        }
    }
    return output;
}

// Count the number of Vowels in word
function countVowels(word) {
    var vowels = ["a", "e", "i", "o", "u"];
    var vowelCount = 0;
    for (var i = 0; i < word.length; i++) {
        var currentChar = word[i];
        if (vowels.indexOf(currentChar) !== -1) {
            vowelCount++;
        }
    }
    return vowelCount;
}

longestWord("Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers");
