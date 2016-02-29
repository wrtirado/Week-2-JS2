// Create an html file and js file and add a script tag to include the js file as before.
// Prompt the user to enter any word using the prompt function.
//
// Report back information in a single alert dialog about the word they entered.
 // Use variables and string concatenation (+) to combine string values to be
 // alerted. charAt, toLowerCase, toUpperCase, and substring are string functions.
 // Look for some examples online and test things out in the console to see if you
 //  can figure out the syntax for using these functions.
//
// The word they entered, verbatim
// How many characters are in it (length property)
//
// If you have gotten this far, what should you do? Commit!
//
// Run git init to initialize the folder as a git repository.
// Run git add -A and git commit -m "[ENTER MESSAGE]" to commit your changes to
// your local repo.
// Create a repo on github using the instructions in How to Git. Push your
// changes to the remote github repo.


// What the third character is (charAt)
// The word in lowercase (toLowerCase)
// The word in uppercase (toUpperCase)
// The word in a sentence
// The subword from the 2nd to the 4th character, inclusive (substring)
// The alert's output might look like this:

// You entered: Mango
// There are 5 characters in the word.
// The third character is 'n'
// Lowercase: mango
// Uppercase: MANGO
// Example: I have wanted a Mango since I was a little boy.
// Subword: ang
// COMPLETE

var userWord = prompt("Please, enter a word. Any word will do!")

alert ("You entered " + userWord + ", which contains " + userWord['length'] + " letters.")
